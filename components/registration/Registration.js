"use client"
import { PasswordInput, TextInput, YellowButton } from "@components/common"
import React, { useState } from "react"
import Image from "next/image"

// image import
import BetFairIcon from "../../public/images/batefair.svg"

function Referral() {
  return (
    <div className=" match_card tw-w-[90%] tw-h-36 tw-mb-4 tw-flex tw-flex-col tw-mt-6 ">
      <p className="tw-font-medium tw-text-base tw-mb-2 tw-ml-4 tw-mt-2  ">
        Referral Code
      </p>
      <input
        className="tw-pl-4 tw-border-2 tw-h-14 tw-w-[90%] tw-self-center tw-text-white tw-outline-none tw-border-gray-700  "
        placeholder={"Hello Ram"}
      />
      <p className="tw-self-center tw-mt-3 ">Ravi shankar</p>
    </div>
  )
}

function Registration() {
  const [userName, setUserName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  const [conformPassword, setConformPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConformPassword, setShowConformPassword] = useState(false)

  return (
    <div>
      <form className=" tw-ml-[10%]">
        <TextInput
          type="text"
          placeholder="Your Full Name"
          label="Full Name"
          setValue={setUserName}
          value={userName}
          className={"tw-h-14"}
        />
        <TextInput
          label={"Mobile"}
          type={"tel"}
          pattern={"/^d{10}$/"}
          placeholder={"Mobile number with code"}
          setValue={setMobileNumber}
          value={mobileNumber}
          className={"tw-h-14"}
        />
        <TextInput
          type="email"
          placeholder="Your email"
          label="Email"
          setValue={setEmail}
          value={email}
          className={"tw-h-14"}
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

        <Referral />

        <div className="tw-flex tw-w-[90%] tw-mb-4  ">
          {/* <input type="checkbox" id="third-checkbox" />
          <label
            for="third-checkbox"
            className="custom-checkbox tw-w-16 tw-h-6 tw-self-start"
          ></label> */}
          <p className="tw-ml-2 tw-font-thin">
            We Promote and encourage safe and responsible gambling.Please
            conform that you are above the age of 18
          </p>
        </div>
        <YellowButton
          label={"Join Now"}
          type="submit"
          className={"tw-w-[90%]"}
        />
      </form>
      {/* <Image
        src={BetFairIcon}
        width={160}
        alt="Image"
        className="tw-ml-[30%]  tw-absolute "
      /> */}
    </div>
  )
}

export { Registration }
