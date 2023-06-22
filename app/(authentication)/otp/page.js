"use client"
import { OtpInput } from "@components"
import { YellowButton } from "@components/common"
import React, { useState } from "react"

function Otp() {
  const [otp, setOtp] = useState("")
  const onChange = (value) => setOtp(value)
  const isOTPSent = true

  return (
    <div className="tw-flex tw-flex-col ">
      <p className="tw-text-xl tw-font-semibold tw-mt-6 tw-self-center">
        OTP send to +91 9166186443
      </p>
      <p className="tw-text-lg tw-font-semibold tw-mt-6 tw-self-center">
        Enter the OTP you Received
      </p>
      <div className="tw-flex tw-justify-center tw-my-8">
        <OtpInput value={otp} valueLength={6} onChange={onChange} />
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
      <div className="tw-min-w-full tw-flex tw-justify-center">
        <YellowButton label={"submit"} className={"tw-w-[90%]"} />
      </div>
    </div>
  )
}

export default Otp
