"use client"
import {
  BlackButton,
  Checkbox,
  Loading,
  PasswordInput,
  TextInput,
  Toast,
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
// import { setCookie } from "cookies-next"
// import { cookies } from "next/headers"

// TODO
// Make remember  me checkbox  IS NOT WORKING ,SALA PATA NAHI KYU

function Login() {
  const [email, setEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const { isToastOpen, tostToggle } = useToast()
  const router = useRouter()
  const dispatch = useDispatch()
  const errorData = useSelector((state) => state.errorContext)

  async function submitHandler(event) {
    event.preventDefault()

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

      tostToggle()
    }
    if (response.success) {
      setIsLoading(false)
      // setCookie("cookieKey", value, { req, res, maxAge: 60 * 6 * 24 })
      dispatch(resetError())
      router.replace("/home/inplay")
    }
  }

  return (
    <>
      {isToastOpen && <Toast>{errorData.errorMessage}</Toast>}
      {loading && <Loading />}
      <form className=" tw-ml-[10%]" onSubmit={submitHandler}>
        <TextInput
          label={"Email"}
          placeholder={"Please put UserName"}
          type={"email"}
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}
          value={email}
          setValue={setEmail}
          className={"tw-h-12"}
        />
        <PasswordInput
          label={"Password"}
          placeholder={"Put password"}
          value={userPassword}
          setUserPassword={setUserPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          className={"tw-h-12 "}
        />

        <div className="tw-flex tw-justify-between tw-w-[90%] tw-mb-4 tw-font-thin ">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Checkbox />
            <p className="tw-whitespace-nowrap tw-ml-2 ">Remember me</p>
          </div>
          <p className="tw-text-goldenColor">Forget Password</p>
        </div>
        <div className="tw-flex tw-w-[90%] tw-mb-4  ">
          {/* Checkbox is not working has to see ,getting the  */}
          {/* <Checkbox setIsChecked={setIsChecked} isChecked={isChecked} /> */}
          {/* <Checkbox /> */}
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
        <BlackButton label={"Join Now"} className="tw-w-[90%]" />
      </form>
      <Image
        src={BetFairIcon}
        width={200}
        alt="Image"
        className="tw-ml-[20%]  tw-absolute tw-bottom-4"
      />
    </>
  )
}

export { Login }
