"use client"
import { PasswordInput, TextInput, YellowButton } from "@components/common"
import React, { useState } from "react"
import Image from "next/image"

// image import
import BetFairIcon from "../../public/images/batefair.svg"

function Referral() {
  return (
    <div className=" referral tw-w-[90%] tw-h-28 tw-mb-4 tw-flex tw-flex-col ">
      {/* <div className="referral tw-w-[90%] "></div> */}
      <p className="tw-font-bold tw-text-lg tw-mb-2 tw-ml-1 ">Referral Code</p>
      <input
        className="tw-pl-4 tw-border-2 tw-h-10 tw-w-[90%] tw-self-center tw-text-white "
        placeholder={"Hello Ram"}
      />
      <p className="tw-self-center">Ravi shankar</p>
    </div>
  )
}

function Registration() {
  const [userName, setUserName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  const [conformPassword, setConformPassword] = useState("")

  return (
    <div>
      <form className=" tw-ml-[10%]">
        <TextInput
          type="text"
          placeholder="Your Full Name"
          label="Full Name"
          setValue={setUserName}
          value={userName}
        />
        <TextInput
          label={"Mobile"}
          type={"tel"}
          pattern={"/^d{10}$/"}
          placeholder={"Mobile number with code"}
          setValue={setMobileNumber}
          value={mobileNumber}
        />
        <TextInput
          type="email"
          placeholder="Your email"
          label="Email"
          setValue={setEmail}
          value={email}
        />
        <PasswordInput
          placeholder={"Password"}
          label={"Password"}
          setUserPassword={setPassword}
          value={password}
        />
        <PasswordInput
          placeholder={"Repeat Password"}
          label={"Conform Password"}
          setUserPassword={setConformPassword}
          value={conformPassword}
        />
        {/* Refferal */}
        <Referral />
        {/* Reffreal */}

        <div className="tw-flex tw-w-[90%] tw-mb-4  ">
          <input type="checkbox" className="tw-h-6 tw-w-6 " />
          <p className="tw-ml-2 tw-font-thin">
            We Promote and encourage safe and responsible gambling.Please
            conform that you are above the age of 18
          </p>
        </div>
        <YellowButton label={"Join Now"} type="submit" />
      </form>
      <Image
        src={BetFairIcon}
        width={160}
        alt="Image"
        className="tw-ml-[30%]  tw-absolute "
      />
    </div>
  )
}

export { Registration }
