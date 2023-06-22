"use client"
import React, { useState, useEffect } from "react"
import { MdOutlineContentCopy } from "react-icons/md"

function AccountInformation() {
  const [copiedValue, setCopiedValue] = useState("")
  async function copyToClipBoard(text) {
    await navigator.clipboard.writeText(text)
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
    <div className="match_card tw-grid tw-grid-cols-7 tw-px-2 tw-my-4 tw-py-6 tw-mx-2">
      <div className="tw-col-span-3 tw-text-gray-400">
        <p>Account Holder Name </p>
        <p className="tw-my-6">Account Number </p>
        <p>IFSC Code </p>
      </div>
      <div className="tw-col-span-4  ">
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
  )
}

export default AccountInformation
