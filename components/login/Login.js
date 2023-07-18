"use client"
import {
  BlackButton,
  Checkbox,
  Loader,
  PasswordInput,
  TextInput,
  YellowButton,
} from "@components/common"
import React, { useState } from "react"
import Image from "next/image"

import BetFairIcon from "../../public/images/batefair.svg"
import FetchData from "@utils/Fetcher"
import { useToast } from "@hooks"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { setError, resetError } from "../../redux/feature/error/errorSlice"
import { setUser } from "@redux/feature/user/userSlice"
import Link from "next/link"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { NOTIFICATION_SETTING } from "utils/constants"

function Login() {
  const [email, setEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isCheckedConsent, setIsCheckedConcent] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const { isToastOpen, tostToggle } = useToast()
  const router = useRouter()
  const dispatch = useDispatch()
  const errorData = useSelector((state) => state.errorContext)

  async function submitHandler(event) {
    event.preventDefault()
    if (!isCheckedConsent) {
      toast.info("Please check the checkbox", {
        ...NOTIFICATION_SETTING,
      })
      return ""
    }
    setIsLoading(true)
    const response = await FetchData("punter/login", {
      method: "POST",
      body: {
        password: userPassword,
        email: email,
      },
    })

    if (!response.success) {
      let data = {
        errorMessage: response.message,
        errorState: response.success,
      }
      dispatch(setError(data))
      setIsLoading(false)
      toast.warning(`${response.message}`, {
        ...NOTIFICATION_SETTING,
      })
      tostToggle()
    }
    if (response.success) {
      let userData = response["data"]["user"]
      dispatch(resetError())
      dispatch(setUser({ ...userData }))
      router.replace("/home/inplay")
      toast.success("Welcome Back!", {
        ...NOTIFICATION_SETTING,
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <ToastContainer />
      {loading && <Loader />}
      <form className=" tw-ml-[10%]" onSubmit={submitHandler}>
        <TextInput
          label={"Email"}
          placeholder={"Email id"}
          type={"email"}
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}
          value={email}
          setValue={setEmail}
          className={"tw-h-12"}
        />
        <PasswordInput
          label={"Password"}
          placeholder={"password"}
          value={userPassword}
          setUserPassword={setUserPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          className={"tw-h-12 "}
        />

        <div className="tw-flex tw-justify-between tw-w-[90%] tw-mb-4 tw-font-thin ">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
            <p className="tw-whitespace-nowrap tw-ml-2 ">Remember me</p>
          </div>
          <Link href="/forgetPassword" className="tw-text-goldenColor">
            Forget Password
          </Link>
        </div>
        <div className="tw-flex tw-w-[90%] tw-mb-4  ">
          <Checkbox
            setIsChecked={setIsCheckedConcent}
            isChecked={isCheckedConsent}
          />
          <p className="tw-font-thin tw-ml-4">
            We Promote and encourage safe and responsible gambling.Please
            conform that you are above the age of 18
          </p>
        </div>

        <YellowButton
          label={"Login"}
          className="tw-w-[90%]"
          type="submit"
          disable={loading}
        />

        <p className="tw-mt-4 tw-mb-2 tw-ml-[30%]">New to Gigblitz ?</p>
      </form>
      <div className="tw-flex tw-justify-center">
        <BlackButton
          label={"Join Now"}
          className="tw-w-[80%] tw-self-center"
          onClick={() => router.push("/registration")}
        />
      </div>
      {/* <Image
        src={BetFairIcon}
        width={200}
        alt="Image"
        className="tw-ml-[20%]  tw-absolute tw-bottom-4"
      /> */}
    </>
  )
}

export { Login }
