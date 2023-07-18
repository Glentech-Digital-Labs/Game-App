"use client"
import { PasswordInput, YellowButton } from "@components/common"
import { Input } from "@components/common/InputComponent"
import FetchData from "@utils/Fetcher"
import { useRouter, useParams } from "next/navigation"
import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { NOTIFICATION_SETTING } from "utils/constants"

async function passwordUpdateHandler({ code, newPassword, router }) {
  const response = await FetchData("punter/forgot-password/execute-reset", {
    method: "POST",
    body: {
      code: code,
      newPassword: newPassword,
    },
  })

  if (response.success || response.status == "401") {
    toast.success("Congratulation", {
      ...NOTIFICATION_SETTING,
    })
    router.push("/login")
  }
  if (!response.success) {
    toast.error(`${response.message},{
        ...NOTIFICATION_SETTING
      }`)
  }
}

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [conformPassword, setConformPassword] = useState("")
  const [showConformPassword, setShowConformPassword] = useState(false)
  const [isPasswordMatch, setIsPasswordmatch] = useState(true)

  const params = useParams()
  const { id } = params
  const [code, setCode] = useState(id)
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
      <ToastContainer />
      <div className="tw-flex tw-flex-col tw-justify-between tw-items-center">
        <Input
          label={"code"}
          value={code}
          className={"tw-w-4/5"}
          setValue={setCode}
          type={"text"}
          parentStyle={{ width: "90%" }}
        />

        <PasswordInput
          label={"new Password"}
          type={"password"}
          parentStyle={{ minWidth: "90%" }}
          setUserPassword={setNewPassword}
          value={newPassword}
          setShowPassword={setShowNewPassword}
          showPassword={showNewPassword}
          inputStyle={{ borderColor: isPasswordMatch ? "" : "red" }}
        />
        <PasswordInput
          label={"Conform Password"}
          type={"password"}
          parentStyle={{ minWidth: "90%" }}
          setUserPassword={setConformPassword}
          value={conformPassword}
          setShowPassword={setShowConformPassword}
          showPassword={showConformPassword}
          inputStyle={{ borderColor: isPasswordMatch ? "" : "red" }}
        />
        <YellowButton
          label={"submit"}
          className={"tw-w-2/5 tw-mt-4"}
          onClick={() => passwordUpdateHandler({ code, newPassword, router })}
        />
      </div>
    </>
  )
}

export { ResetPassword }
