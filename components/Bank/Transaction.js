"use client"
import React, { useState } from "react"
// import { FaSackDollar } from "react-icons/fa"
import { BiWallet } from "react-icons/bi"
import { Input } from "@components/common/InputComponent"
import { YellowButton } from "@components/common"
import { TransactionCard } from "./TransactionCard"

function Header() {
  return (
    <div className="tw-flex tw-mx-2 ">
      <div
        className="tw-bg-[#2B2B31] tw-border-2 tw-border-black tw-flex tw-items-center  tw-mr-2  tw-w-[45%] tw-rounded-t-xl"
        style={{ borderStyle: "outset" }}
      >
        <div
          className="tw-bg-[#3B3B42] tw-rounded-full tw-p-2 tw-flex tw-my-2 "
          style={{ borderStyle: "outset" }}
        >
          <BiWallet fontSize={32} className="tw-self-center" />
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-ml-2">
          Total Deposit
          <span className="tw-font-semibold">7500</span>
        </div>
      </div>
      <div
        className="tw-bg-[#2B2B31] tw-border-2 tw-border-black tw-flex tw-justify-center tw-items-center tw-w-[55%] tw-rounded-xl"
        style={{ borderStyle: "outset" }}
      >
        <div
          className="tw-bg-[#3B3B42] tw-rounded-full  tw-p-2"
          style={{ borderStyle: "outset" }}
        >
          <BiWallet fontSize={32} />
        </div>
        <div className="tw-flex tw-flex-col  tw-ml-2">
          Total WithDrawals
          <span className="tw-font-semibold">7500</span>
        </div>
      </div>
    </div>
  )
}

function Transaction() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleHeight = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="tw-bg-[#201F29] tw-font-extralight">
        <Header />
        <div
          className={` tw-flex tw-flex-col tw-items-center tw-py-6  tw-mb-16  `}
        >
          <div
            className={`tw-grid tw-grid-cols-2 container tw-px-2 ${
              isOpen ? "open" : "closed"
            } `}
          >
            <div className="tw-col-span-1 tw-grid tw-grid-rows-2 ">
              {/* Need to change the color of border and Calender which is looking black */}
              <Input
                type={"date"}
                label={"From"}
                className={"tw-border-2  tw-border-gray-600 "}
              />
              <Input
                type={"text"}
                value={"Deposit"}
                label={"Transition Type"}
                setValue={() => {}}
                className={"tw-border-2  tw-border-gray-600 "}
              />
            </div>
            <div className="tw-col-span-1 tw-grid tw-grid-rows-2 ">
              <Input
                type={"date"}
                label={"To"}
                className={"tw-border-2  tw-border-gray-600 "}
              />
              <Input
                type={"text"}
                value={"Deposit"}
                label={"Status"}
                setValue={() => {}}
                className={"tw-border-2  tw-border-gray-600"}
              />
            </div>
          </div>
          <YellowButton label={"Apply"} className={"tw-w-1/2 "} />
          <div
            onClick={toggleHeight}
            className="tw-bg-[#201F29] tw-relative tw-w-20 tw-h-8  tw-px-4  tw-bottom-[-3rem]  tw-flex tw-justify-center tw-items-center tw-rounded-lg"
          >
            Hide
          </div>
        </div>
      </div>
      <TransactionCard amount={1000} status={"Approved"} />
      <TransactionCard amount={1000} status={"Rejected"} />
    </>
  )
}

export { Transaction }
