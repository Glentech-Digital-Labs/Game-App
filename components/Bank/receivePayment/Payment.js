"use client"
import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
import QR_Image from "/public/images/QR_code.png"
import { AmountCard } from "@components"
import CurrencyData from "/utils/currency.json"
import { AiFillPlusCircle } from "/utils/Icons"
import { BlackButton, YellowButton } from "@components/common"
import FetchData from "@utils/Fetcher"
import { MdOutlineContentCopy } from "/utils/Icons"
import "./index.css"

function AccountInformation({ selectedDate }) {
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
    <>
      <div className="card tw-grid tw-grid-cols-7 tw-px-2 tw-my-4 tw-py-6 tw-mx-2">
        <div className="tw-col-span-3 tw-text-gray-400">
          <p>{selectedDate?.accHoldersName?.name} </p>
          <p className="tw-mt-6">{selectedDate?.accountNumber?.name} </p>
          <p className="tw-my-4">{selectedDate?.ifsc?.name} </p>
          <p>{selectedDate?.bankName?.name} </p>
        </div>
        <div className="tw-col-span-4  ">
          <div className="tw-flex tw-items-center tw-relative  tw-my-2">
            <p>: {selectedDate?.accHoldersName?.value} </p>
            <MdOutlineContentCopy
              fontSize={16}
              className="tw-ml-3"
              onClick={() => {
                copyToClipBoard(selectedDate?.accHoldersName?.value)
              }}
            />
            {!!copiedValue && (
              <div className="tw-absolute tw-z-10  tw-h-14 tw-w-full  tw-text-white">
                Copied -{copiedValue}
              </div>
            )}
          </div>
          <div className="tw-flex tw-items-center tw-mt-10">
            <p>: {selectedDate?.accountNumber?.value}</p>
            <MdOutlineContentCopy
              fontSize={16}
              className="tw-m-1"
              onClick={() => {
                copyToClipBoard(selectedDate?.accountNumber?.value)
              }}
            />
          </div>
          <div
            className="tw-flex tw-items-center tw-mt-4 "
            onClick={() => {
              copyToClipBoard(selectedDate?.ifsc?.value)
            }}
          >
            <p>: {selectedDate?.ifsc?.value}</p>
            <MdOutlineContentCopy fontSize={16} className="tw-m-1" />
          </div>
          <div
            className="tw-flex tw-items-center tw-mt-4"
            onClick={() => {
              copyToClipBoard(selectedDate?.bankName?.value)
            }}
          >
            <p>: {selectedDate?.bankName?.value}</p>
            <MdOutlineContentCopy fontSize={16} className="tw-m-1" />
          </div>
        </div>
      </div>
    </>
  )
}

function UPIComponent({ selectedDate }) {
  return (
    <>
      <div className="match_card tw-flex  tw-flex-col tw-justify-center tw-items-center tw-py-2 tw-mx-2">
        <Image
          alt="Payment QR"
          height={180}
          width={180}
          src={selectedDate?.["qrImageUrl"]?.["value"]}
        />
        <p className="tw-flex tw-my-2 tw-items-center">
          <span>{selectedDate.upiId?.value}</span>{" "}
          <MdOutlineContentCopy fontSize={24} className="tw-ml-2 " />
        </p>
      </div>
    </>
  )
}

function Payment() {
  const [paymentData, setPaymentData] = useState([])

  const [typeOfAccount, setTypeOfAccount] = useState("BANK_DETAILS")

  async function getPayment() {
    const response = await FetchData("backoffice/payment-methods/active")
    if (response.success) {
      setPaymentData(response.data)
    }
  }
  useEffect(() => {
    getPayment()
  }, [typeOfAccount])

  function selectPaymentMode(id) {
    let realId = id - 1
    setTypeOfAccount(paymentData[realId]?.["type"])
  }

  return (
    <>
      <div className="tw-flex tw-bg-[#171717] tw-justify-center tw-my-4 ">
        {paymentData?.map((item) => {
          return (
            <Image
              src={item.bannerImageUrl}
              height={84}
              width={100}
              key={item.id}
              onClick={() => selectPaymentMode(item.id)}
              className="tw-cursor-pointer"
            />
          )
        })}
      </div>

      {typeOfAccount == "UPI" ? (
        <UPIComponent selectedDate={paymentData[0]?.["methodData"]} />
      ) : (
        <AccountInformation selectedDate={paymentData[1]?.["methodData"]} />
      )}

      {/* Sever component can be passed as children to client component */}
      {/* Data from server component to client component data need to be serializable */}
    </>
  )
}

export { Payment }
