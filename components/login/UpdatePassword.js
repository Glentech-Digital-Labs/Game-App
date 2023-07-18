"use client"
import { Loader, PasswordInput, YellowButton } from "@components/common"
import { Input } from "@components/common/InputComponent"
import FetchData from "@utils/Fetcher"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

async function passwordUpdateHandler({
  oldPassword,
  newPassword,
  router,
  setLoading,
}) {
  setLoading(true)
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
    setLoading(false)
  }
  if (!response.success) {
    setLoading(false)
    throw new Error("Error in FetchData Data")
  }
}

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("")
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [conformPassword, setConformPassword] = useState("")
  const [showConformPassword, setShowConformPassword] = useState(false)
  const [isPasswordMatch, setIsPasswordmatch] = useState(true)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (conformPassword !== newPassword) {
      setIsPasswordmatch(false)
    }
    if (conformPassword == newPassword) {
      setIsPasswordmatch(true)
    }
  }, [conformPassword, newPassword])

  return (
    <>
      {loading && <Loader />}
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
          onClick={() =>
            passwordUpdateHandler({
              oldPassword,
              newPassword,
              router,
              setLoading,
            })
          }
        />
      </div>
    </>
  )
}

export default UpdatePassword
