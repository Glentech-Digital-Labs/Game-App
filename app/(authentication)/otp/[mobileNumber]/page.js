"use client"
import { OtpInput } from "@components"
import { Circle, YellowButton } from "@components"
import React, { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import FetchData from "@utils/Fetcher"
import { resetUser, setUser } from "/redux/feature/user/userSlice"

function Otp() {
  const [otp, setOtp] = useState("")
  const onChange = (value) => setOtp(value)
  const isOTPSent = true
  const userData = useSelector((state) => state.userContext)
  const dispatch = useDispatch()
  const router = useRouter()

  async function submitHandler() {
    const response = await FetchData("punter/sign-up", {
      method: "POST",
      body: {
        fullName: userData.fullName,
        userName: userData.userName,
        password: userData.password,
        email: userData.email,
        countryCode: userData.countryCode,
        phoneNumber: userData.phoneNumber,
        refererCode: userData.refererCode,
        otp: otp,
        mode: "submitOtp",
      },
    })
    if (response.success) {
      dispatch(resetUser())
      router.replace("/home")
    }
    console.log("Otp wale ka response", response)
  }

  return (
    <div className="tw-flex tw-flex-col ">
      <p className="tw-text-xl tw-font-semibold tw-mt-6 tw-self-center">
        OTP send to +91 9166186443
      </p>
      <p className="tw-text-lg tw-font-semibold tw-mt-6 tw-self-center">
        Enter the OTP you Received
      </p>
      <div className="tw-flex tw-justify-center tw-my-8">
        <OtpInput value={otp} valueLength={4} onChange={onChange} />
      </div>
      <div className="tw-text-center tw-my-8">
        {isOTPSent ? (
          <>
            Resend OTP in <span className="tw-text-red-500">10 second</span>
          </>
        ) : (
          <p className="tw-text-red-500">Resend</p>
        )}
      </div>
      <div className="tw-min-w-full tw-flex tw-justify-center tw-mb-6">
        <YellowButton
          label={"submit"}
          className={"tw-w-[90%]"}
          onClick={submitHandler}
        />
      </div>
      <Circle />
    </div>
  )
}

export default Otp
