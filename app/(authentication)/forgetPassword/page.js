import ForgetPassword from "@components/login/ForgetPassword"
import React from "react"

function Password() {
  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-max-h-screen ">
      <p className="tw-font-bold tw-text-[20px] tw-self-center tw-mt-20 tw-mb-8 ">
        Enter Your registered Email address
      </p>
      <ForgetPassword />
    </div>
  )
}

export default Password
