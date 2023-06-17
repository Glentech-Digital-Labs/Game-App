"use client"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import Bank_Image from "/public/images/Bank_Image.svg"
import UPI_IMAGE from "/public/images/UPI_Image.svg"
import CurrencyData from "/utils/currency.json"
import { BlackButton, YellowButton } from "@components/common"
import { MdOutlineContentCopy } from "react-icons/md"
import "./index.css"

function AccountDetails() {
  const [copiedValue, setCopiedValue] = useState("")
  function copyToClipBoard(text) {
    navigator.clipboard.writeText(text)
    setCopiedValue(text)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopiedValue("")
    }, 500)
    return () => {
      clearTimeout(timeOut)
    }
  }, [copiedValue])

  return (
    <>
      <div className="tw-flex tw-bg-[#171717] tw-justify-center tw-my-6 ">
        <Image src={Bank_Image} height={84} />
        <Image src={UPI_IMAGE} height={84} className="tw-ml-4" />
      </div>
      <div className="match_card tw-grid tw-grid-cols-7 tw-px-2 tw-my-4 tw-py-6">
        <div className="tw-col-span-3 tw-text-gray-400">
          <p>Account Holder Name </p>
          <p className="tw-my-6">Account Number </p>
          <p>IFSC Code </p>
        </div>
        <div className="tw-col-span-4 ">
          <div className="tw-flex tw-items-center tw-relative ">
            <p>: Gadha electronics </p>
            <MdOutlineContentCopy
              fontSize={16}
              className="tw-ml-3"
              onClick={() => {
                copyToClipBoard("Jai Shree Ram")
              }}
            />
            {!!copiedValue && (
              <div className="tw-absolute tw-z-10  tw-h-14 tw-w-full  tw-text-white">
                Copied -{copiedValue}
              </div>
            )}
          </div>
          <div className="tw-flex tw-items-center tw-my-6">
            <p>: 5400 4321 8432 5432</p>
            <MdOutlineContentCopy
              fontSize={16}
              className="tw-m-1"
              onClick={() => {
                copyToClipBoard("Jai Ram Krishan")
              }}
            />
          </div>
          <div
            className="tw-flex tw-items-center"
            onClick={() => {
              copyToClipBoard("Har Har Maha dev")
            }}
          >
            <p>: HDFC0004321</p>
            <MdOutlineContentCopy fontSize={16} className="tw-m-1" />
          </div>
        </div>
      </div>

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
