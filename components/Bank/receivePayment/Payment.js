"use client"
import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
import { AmountCard } from "@components"
import CurrencyData from "/utils/currency.json"
import { AiFillPlusCircle } from "/utils/Icons"
import { BlackButton, Loader, Toast, YellowButton } from "@components/common"
import FetchData from "@utils/Fetcher"
import { MdOutlineContentCopy } from "/utils/Icons"
import "./index.css"
import { useToast } from "@hooks"
import { useRouter } from "next/navigation"

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

let array = [1000, 2000, 3000, 4000, 5000, 6000]
function BottomLayout({
  setAmount,
  amount,
  setUtrNumber,
  utrNumber,
  setSelectedImage,
  submitHandler,
  className,
}) {
  const [selectedId, setSelectedId] = useState(0)
  const router = useRouter()

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      const base64String = reader.result
      setSelectedImage(base64String)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <div
        className={`tw-flex tw-overflow-x-auto tw-my-4 remove-scroll-bar ${className}`}
      >
        {array.map((item, index) => {
          let color
          if (item == selectedId) {
            color = "yellowButton"
          } else {
            color = "BlackButton"
          }
          return (
            <AmountCard
              amount={item}
              className={color}
              setAmount={setAmount}
              key={item}
              id={item}
              setSelectedId={setSelectedId}
            />
          )
        })}
      </div>

      <div className="tw-bg-[#212128]  tw-pl-2 tw-py-3 tw-px-4 tw-mx-2 tw-rounded-lg tw-h-14 tw-my-4 tw-flex tw-items-center ">
        {CurrencyData["INR"]["symbol"]} {amount}
      </div>
      <div
        className="tw-bg-[#212128]  tw-pl-2 tw-py-3 tw-px-4 tw-mx-2 tw-rounded-lg tw-h-14 tw-flex tw-items-center tw-outline-none"
        suppressContentEditableWarning={true}
        contentEditable={true}
        onInput={(e) => setUtrNumber(e.currentTarget.textContent)}
      >
        {utrNumber}
      </div>

      <div
        className="tw-bg-[#212128] tw-border-2 tw-border-black tw-my-2 tw-flex tw-justify-center tw-items-center tw-relative tw-w-32 tw-h-32 tw-flex-col tw-ml-3"
        onChange={handleImageUpload}
      >
        <input
          type="file"
          accept="image/*"
          className=" tw-z-10 tw-absolute tw-opacity-0 tw-w-full tw-h-full"
        />
        <AiFillPlusCircle fontSize={32} className=" " />
        <p className="tw-text-center tw-mt-2">Payment proof screenshot </p>
      </div>
      <div className="tw-flex tw-mt-4 tw-bottom-4 tw-w-full tw-mx-3">
        <YellowButton
          label={"Submit"}
          className={"tw-w-[45%]"}
          onClick={submitHandler}
        />
        <BlackButton
          label={"Cancel"}
          className={"tw-w-[45%] tw-ml-2"}
          onClick={() => router.back()}
        />
      </div>
    </>
  )
}

function Payment() {
  const [paymentData, setPaymentData] = useState([])

  const [typeOfAccount, setTypeOfAccount] = useState("BANK_DETAILS")
  const [amount, setAmount] = useState(0)
  const [utrNumber, setUtrNumber] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const { isToastOpen, tostToggle } = useToast()
  const router = useRouter()
  let methodId
  if (typeOfAccount == "BANK_DETAILS") {
    methodId = 1
  } else {
    methodId = 2
  }

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

  async function submitHandler() {
    setIsLoading(true)
    const response = await FetchData(`accounts/deposit/create`, {
      method: "POST",
      body: {
        amount,
        referenceNumber: utrNumber,
        proofImg: selectedImage.split(",")[1],
        methodId: methodId,
      },
    })

    if (!!response.ok) {
      throw new Error("NOT UPLOADED THE IMAGE,SOMETHING WENT WRONG")
    }
    if (response.success) {
      setMessage("successfully UPLOADED the record")
      tostToggle()
      setTimeout(() => {
        router.push("home/inplay")
      }, 2000)
      setIsLoading(false)
    }
    if (!response.success) {
      setMessage("Error in  UPLOADED the record")
      tostToggle()
      setIsLoading(false)
    }
  }

  return (
    <>
      <Toast isToastOpen={isToastOpen} tostToggle={tostToggle}>
        {message}
      </Toast>
      {isLoading && <Loader />}
      <div className="tw-flex tw-bg-[#171717] tw-justify-center tw-my-4  tw-mb-10">
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
      <BottomLayout
        amount={amount}
        setAmount={setAmount}
        setUtrNumber={setUtrNumber}
        utrNumber={utrNumber}
        setSelectedImage={setSelectedImage}
        submitHandler={submitHandler}
      />

      {/* Sever component can be passed as children to client component */}
      {/* Data from server component to client component data need to be serializable */}
    </>
  )
}

export { Payment }
