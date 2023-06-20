"use client"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import Bank_Image from "/public/images/Bank_Image.svg"
import UPI_IMAGE from "/public/images/UPI_Image.svg"
import CurrencyData from "/utils/currency.json"
import { BlackButton, YellowButton } from "@components/common"

import "./index.css"
import AccountInformation from "./AccountInformation.client"

function AccountDetails() {
  return (
    <>
      <div className="tw-flex tw-bg-[#171717] tw-justify-center tw-my-6 ">
        <Image src={Bank_Image} height={84} alt="Bank Icon" />
        <Image
          src={UPI_IMAGE}
          height={84}
          className="tw-ml-4"
          alt="Bank Qr Image"
        />
      </div>
      <AccountInformation />

      <div className="tw-bg-[#212128]  tw-pl-2 tw-py-6 tw-px-4 tw-mx-2 tw-rounded-lg">
        {CurrencyData["USD"]["symbol"]} 100
      </div>
      <div className="tw-bg-[#212128]  tw-pl-2 tw-py-6 tw-px-4 tw-mx-2 tw-rounded-lg tw-mt-4">
        UTR Transition Number
      </div>
      <div className="tw-flex tw-fixed tw-bottom-4 tw-w-full">
        <YellowButton label={"Submit"} className={"tw-w-[48%]"} />
        <BlackButton label={"Cancel"} className={"tw-w-[48%] tw-ml-4"} />
      </div>
    </>
  )
}

export default AccountDetails
