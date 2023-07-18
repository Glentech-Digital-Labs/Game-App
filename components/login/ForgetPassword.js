"use client"
import { Loader, YellowButton } from "@components/common"
import { Input } from "@components/common/InputComponent"
import FetchData from "@utils/Fetcher"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import Data from "utils/config"
import { NOTIFICATION_SETTING } from "utils/constants"

const validator = "^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$"

async function getForgetPasswordMail({ url, email }) {
  const queryParams = {
    ["email"]: email,
  }
  const queryString = Object.keys(queryParams)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
    )
    .join("&")
  const requestUrl = `${BASE_URL}/${url}?${queryString}`
  return fetch(requestUrl, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      return data
    })
    .catch((error) => console.error(error))
}
const BASE_URL = Data.BASE_URL
function ForgetPassword() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit() {
    setIsLoading(true)
    const response = await getForgetPasswordMail({
      url: "punter/forgot-password/init",
      email,
    })
    if (response.success) {
      toast.success(`Email send to ${email}`, {
        ...NOTIFICATION_SETTING,
      })
      router.push("passwordReset/1")
      setIsLoading(false)
    } else {
      toast.error(`${response.message}`, {
        ...NOTIFICATION_SETTING,
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
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
    </>
  )
}

export default ForgetPassword
