"use client"
import {
  BlackButton,
  Checkbox,
  PasswordInput,
  TextInput,
  YellowButton,
} from "@components/common"
import React, { useState } from "react"
import Image from "next/image"

import BetFairIcon from "../../public/images/batefair.svg"

function Login() {
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)

  function submitHandler(event) {
    event.preventDefault()
  }

  return (
    <div>
      <form className=" tw-ml-[10%]" onSubmit={submitHandler}>
        <TextInput
          label={"Username"}
          placeholder={"Please put UserName"}
          type={"email"}
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}
          value={userName}
          setValue={setUserName}
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
          <Checkbox />
          <p className="tw-font-thin tw-ml-4">
            We Promote and encourage safe and responsible gambling.Please
            conform that you are above the age of 18
          </p>
        </div>

        <YellowButton label={"Login"} className="tw-w-[90%]" type="submit" />

        <p className="tw-mt-4 tw-mb-2 tw-ml-[30%]">New to Gigblitz ?</p>
        <BlackButton label={"Join Now"} className="tw-w-[90%]" />
      </form>
      <Image
        src={BetFairIcon}
        width={200}
        alt="Image"
        className="tw-ml-[20%]  tw-absolute tw-bottom-4"
      />
    </div>
  )
}

export { Login }
