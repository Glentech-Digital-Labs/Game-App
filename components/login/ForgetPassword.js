"use client"
import { YellowButton } from "@components/common"
import { Input } from "@components/common/InputComponent"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const validator = "^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$"

function ForgetPassword() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  function onSubmit() {
    if (validator.test(email)) {
      return ""
    }
    router.push("/otp")
  }

  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
      <Input
        type={"email"}
        label={"Email"}
        setValue={setEmail}
        value={email}
        className={"tw-w-full"}
        style={{ minWidth: "100%" }}
        parentStyle={{ minWidth: "80%" }}
        placeholder={"Please enter Your Email"}
        pattern={validator}
      />
      <YellowButton
        label={"Submit"}
        onClick={onSubmit}
        className={"tw-w-[50%]"}
      />
    </div>
  )
}

export default ForgetPassword
