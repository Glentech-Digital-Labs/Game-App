"use client"
import React, { useState } from "react"
import { YellowButton } from "@components/common"
import { TransactionCard } from "./TransactionCard"
import { Header, InputComponent } from "./Transactions.server"

function SummeryComponent({ label_1, data_1, label_2, data_2 }) {
  return (
    <>
      <div className="tw-flex tw-justify-between tw-py-2">
        <div className="tw-flex">
          <p>{label_1}</p>
          <date>: {data_1}</date>
        </div>
        <div className="tw-flex">
          <p>{label_2}</p>
          <date>: {data_2}</date>
        </div>
      </div>
    </>
  )
}

function Transaction({ children }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleHeight = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="tw-bg-[#201F29] tw-font-normal tw-pt-4 tw-px-4">
        <div
          className={` tw-py-2 tw-min-w-full container   ${
            isOpen ? "open" : "closed"
          }`}
        >
          <Header />
          <div
            className={`tw-grid tw-grid-cols-2  tw-gap-x-2  tw-min-w-full  `}
          >
            <InputComponent />
          </div>
          <YellowButton
            label={"Apply"}
            className={"tw-w-1/2 tw-translate-x-1/2 "}
          />
        </div>

        <div
          className={`hiding_container ${
            isOpen ? "open_hiding_container" : "close_hiding_container"
          }`}
        >
          <SummeryComponent
            label_1={"From"}
            label_2={"To"}
            data_1={"01/01/2023"}
            data_2={"08/06/2023"}
          />
          <SummeryComponent
            label_1={"Transition type"}
            label_2={"Status"}
            data_1={"Deposit"}
            data_2={"Approved"}
          />
        </div>
      </div>
      <div
        onClick={toggleHeight}
        className="tw-bg-[#201F29] tw-relative tw-mx-auto tw-w-20 tw-h-8  tw-px-4   tw-text-center  tw-rounded-lg"
      >
        Hide
      </div>
      <TransactionCard amount={1000} status={"Approved"} />
      <TransactionCard amount={1000} status={"Rejected"} />
    </>
  )
}

export { Transaction }
