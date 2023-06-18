"use client"
import { YellowButton } from "@components/common"
import { Input } from "../common/InputComponent"
import React from "react"

function BankDetails() {
  return (
    <div className="tw-mx-3">
      <div className="">
        <p className="tw-mt-4">Enter Amount</p>
        <Input
          placeholder={"Enter Info"}
          label={"Conform Account Number"}
          type={"text"}
          pattern={"^${.5}"}
          value={""}
          setValue={() => {}}
          className={"tw-h-14 "}
        />
        <Input
          placeholder={"Enter Code"}
          label={"IfSC Code"}
          type={"text"}
          pattern={"^${.5}"}
          value={""}
          setValue={() => {}}
          className={"tw-h-14 "}
        />
        <Input
          placeholder={"Enter Code"}
          label={"Account Holder"}
          type={"text"}
          pattern={"^${.5}"}
          value={""}
          setValue={() => {}}
          className={"tw-h-14 "}
        />
        <Input
          placeholder={"Enter Code"}
          label={"Bank Name"}
          type={"text"}
          pattern={"^${.5}"}
          value={""}
          setValue={() => {}}
          className={"tw-h-14 "}
        />
        <Input
          placeholder={"Enter Code"}
          label={"Branch Info"}
          type={"text"}
          pattern={"^${.5}"}
          value={""}
          setValue={() => {}}
          className={"tw-h-14 "}
        />
      </div>
      <p>
        Please make sure that account holder name is as per the pass book In
        case of mismatch withdrawal may stuck
      </p>
      <YellowButton className={"tw-w-full tw-mt-4"} label={"submit"} />
    </div>
  )
}

export { BankDetails }
