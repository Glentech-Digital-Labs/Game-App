"use client"
import {
  Checkbox,
  Loader,
  PasswordInput,
  TextInput,
  YellowButton,
} from "@components/common"
import React, { useState } from "react"
import FetchData from "@utils/Fetcher"
import { useDispatch, useSelector } from "react-redux"
import { setError, resetError } from "../../redux/feature/error/errorSlice"
import { resetUser, setUser } from "../../redux/feature/user/userSlice"
import { useToast } from "@hooks"
import { useParams, useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import { NOTIFICATION_SETTING } from "utils/constants"

// When get Time try to implement  useMemo
// I think this is very redundent I need to refactor this in the future

function Referral({ setValue, refererCodeValue }) {
  const [referredName, setReferredName] = useState("")
  function inputHandler(e) {
    setValue((prev) => ({
      ...prev,
      refererCode: e.target.value.toUpperCase(),
    }))
  }
  async function getReferredPersonName() {
    const response = await FetchData(
      `punter/get-user-from-referral-code/${refererCodeValue}`
    )
    if (response.success) {
      const name = response.data?.fullName
      setReferredName(name)
    } else {
      setReferredName("")
    }
  }

  if (refererCodeValue?.length === 6) {
    getReferredPersonName()
  }

  return (
    <div className=" match_card tw-w-[90%] tw-h-36 tw-mb-4 tw-flex tw-flex-col tw-mt-6 ">
      <p className="tw-font-medium tw-text-base tw-mb-2 tw-ml-4 tw-mt-2  ">
        Referral Code
      </p>
      <input
        className="tw-pl-4 tw-border-2 tw-h-14 tw-w-[90%] tw-self-center tw-text-white tw-outline-none tw-border-gray-700  "
        placeholder={"Max length 6"}
        onInput={inputHandler}
        maxLength={6}
        value={refererCodeValue}
      />
      <p className="tw-self-center tw-mt-3 tw-text-[14px] tw-font-bold">
        {referredName}
      </p>
    </div>
  )
}

function Registration() {
  const [password, setPassword] = useState("")
  const [conformPassword, setConformPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConformPassword, setShowConformPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const params = useParams()

  let referralCode = ""
  if (Object.keys(params).length > 0) {
    referralCode = params
  }
  const [registerUserData, setRegisterUserData] = useState({
    userName: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    countryCode: "+91",
    refererCode: referralCode.referralCode,
    depositBalance: 0,
  })

  const submitHandler = async (event) => {
    event.preventDefault()
    if (!isChecked) {
      toast.info("Please check the checkbox", {
        ...NOTIFICATION_SETTING,
      })
      return
    }
    setLoading(true)
    const responseData = await FetchData("punter/sign-up", {
      method: "POST",
      body: {
        ...registerUserData,
        password: password,
        mode: "requestOtp",
      },
    })

    if (!responseData.success) {
      let data = {
        errorMessage: responseData.message,
        errorState: responseData.success,
      }
      toast.error(`${responseData.message}`, {
        ...NOTIFICATION_SETTING,
      })
      setLoading(false), dispatch(setError(data))
    } else {
      setLoading(false)
      dispatch(
        setUser({
          ...registerUserData,
          password,
          isOtpVerified: false,
        })
      )
      dispatch(resetError())
      toast.success(`${responseData.message}`, {
        ...NOTIFICATION_SETTING,
      })
      router.replace(`/otp/${registerUserData.phoneNumber}`)
    }

    return responseData
  }

  function routeHandler(event) {
    event.preventDefault()
    router.push("/login")
  }

  return (
    <div className="tw-relative">
      <ToastContainer />
      {loading && <Loader />}
      <form className=" tw-ml-[10%]" onSubmit={submitHandler}>
        <TextInput
          type="text"
          placeholder="Your Full Name"
          label="Full Name"
          setValue={setRegisterUserData}
          value={registerUserData.fullName}
          className={"tw-h-14"}
          field="fullName"
        />
        <TextInput
          type="text"
          placeholder="UserName"
          label="Username"
          setValue={setRegisterUserData}
          value={registerUserData.userName}
          className={"tw-h-14"}
          field="userName"
        />
        <TextInput
          label={"Mobile number"}
          type={"tel"}
          // pattern={"/^d{10}$/"}
          pattern={"/^(?:+d{1,3}s?)?(?d{3})?[-.s]?d{3}[-.s]?d{4}$/"}
          placeholder={"Mobile number with code"}
          setValue={setRegisterUserData}
          value={registerUserData.phoneNumber}
          className={"tw-h-14"}
          field="phoneNumber"
        />
        <TextInput
          type="email"
          placeholder="Your email"
          label="Email"
          setValue={setRegisterUserData}
          value={registerUserData.email}
          className={"tw-h-14"}
          field="email"
        />
        <PasswordInput
          placeholder={"Password"}
          label={"Password"}
          setUserPassword={setPassword}
          value={password}
          className={"tw-h-14"}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <PasswordInput
          placeholder={"Repeat Password"}
          label={"Conform Password"}
          setUserPassword={setConformPassword}
          value={conformPassword}
          className={"tw-h-14"}
          setShowPassword={setShowConformPassword}
          showPassword={showConformPassword}
        />

        <Referral
          setValue={setRegisterUserData}
          refererCodeValue={registerUserData.refererCode}
        />

        <div className="tw-flex tw-w-[90%] tw-mb-4  tw-justify-items-start ">
          <Checkbox setIsChecked={setIsChecked} isChecked={isChecked} />
          <p className="tw-ml-2 tw-font-thin">
            We Promote and encourage safe and responsible gambling.Please
            conform that you are above the age of 18
          </p>
        </div>
        <YellowButton
          label={"Join Now"}
          type="submit"
          disable={loading}
          className={"tw-w-[90%] "}
        />
      </form>
      <p className="tw-text-center tw-text-[18px] tw-mt-4">
        Already account ,Login
      </p>
      <YellowButton
        label={"Login"}
        type="submit"
        disable={loading}
        onClick={(event) => routeHandler(event)}
        className={"tw-w-[80%] tw-my-4 "}
        style={{ marginLeft: "2.4rem" }}
      />
    </div>
  )
}

export { Registration }
