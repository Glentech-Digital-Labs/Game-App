"use client"
import { OtpInput } from "@components"
import { Circle, YellowButton } from "@components"
import React, { useState, useEffect, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import FetchData from "@utils/Fetcher"
import { resetUser, setUser } from "/redux/feature/user/userSlice"

// Resend the Otp is still Left
function Otp() {
  const [otp, setOtp] = useState("")
  const onChange = (value) => setOtp(value)
  let intervalRef = useRef()
  const [timer, setTimer] = useState(10)
  const [otpSend, setSendOtp] = useState(true)
  const userData = useSelector((state) => state.userContext)
  const dispatch = useDispatch()
  const router = useRouter()
  const decreaseNum = () => setTimer((prev) => prev - 1)
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

  useEffect(() => {
    if (timer >= 1) {
      intervalRef.current = setInterval(() => {
        decreaseNum()
      }, 1000)
    } else {
      setSendOtp(false)
    }
    return () => {
      clearTimeout(intervalRef.current)
    }
  }, [timer])

  return (
    <div className="tw-flex tw-flex-col ">
      <p className="tw-text-xl tw-font-semibold tw-mt-6 tw-self-center">
        <span>{`OTP send to ${userData.phoneNumber}`}</span>
        9166186443`
      </p>
      <p className="tw-text-lg tw-font-semibold tw-mt-6 tw-self-center">
        Enter the OTP you Received
      </p>
      <div className="tw-flex tw-justify-center tw-my-8">
        <OtpInput value={otp} valueLength={4} onChange={onChange} />
      </div>
      <div className="tw-text-center tw-my-8">
        {otpSend ? (
          <>
            Resend OTP in{" "}
            <span className="tw-text-red-500">{`  ${timer} second`}</span>
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
