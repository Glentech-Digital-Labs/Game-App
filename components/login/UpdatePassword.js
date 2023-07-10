"use client"
import { PasswordInput, YellowButton } from "@components/common"
import { Input } from "@components/common/InputComponent"
import FetchData from "@utils/Fetcher"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("")
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [conformPassword, setConformPassword] = useState("")
  const [showConformPassword, setShowConformPassword] = useState(false)
  const [isPasswordMatch, setIsPasswordmatch] = useState(true)

  const router = useRouter()

  let borderColor
  useEffect(() => {
    console.log("Jai shree ram")
    if (conformPassword !== newPassword) {
      setIsPasswordmatch(false)
    }
    if (conformPassword == newPassword) {
      setIsPasswordmatch(true)
    }
  }, [conformPassword, newPassword])

  async function passwordUpdateHandler(params) {
    const response = await FetchData("user/password/update", {
      method: "POST",
      body: {
        oldPassword,
        newPassword,
        reLogin: false,
      },
    })
    if (response.success || response.status == "401") {
      router.push("/login")
    }
    if (!response.success) {
      throw new Error("Error in FetchData Data")
    }
  }

  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      <PasswordInput
        label={"old Password"}
        type={"password"}
        parentStyle={{ minWidth: "80%" }}
        setUserPassword={setOldPassword}
        value={oldPassword}
        setShowPassword={setShowOldPassword}
        showPassword={showOldPassword}
      />
      <PasswordInput
        label={"new Password"}
        type={"password"}
        parentStyle={{ minWidth: "80%" }}
        setUserPassword={setNewPassword}
        value={newPassword}
        setShowPassword={setShowNewPassword}
        showPassword={showNewPassword}
        inputStyle={{ borderColor: isPasswordMatch ? "" : "red" }}
      />
      <PasswordInput
        label={"Conform Password"}
        type={"password"}
        parentStyle={{ minWidth: "80%" }}
        setUserPassword={setConformPassword}
        value={conformPassword}
        setShowPassword={setShowConformPassword}
        showPassword={showConformPassword}
        inputStyle={{ borderColor: isPasswordMatch ? "" : "red" }}
      />

      <YellowButton
        label={"UpdatePassword"}
        className={"tw-w-2/5 tw-self-center"}
        onClick={passwordUpdateHandler}
      />
    </div>
  )
}

export default UpdatePassword
