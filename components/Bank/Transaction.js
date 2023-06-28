"use client"
import React, { useState } from "react"
import { YellowButton } from "@components/common"
import { TransactionCard } from "./TransactionCard"
import { Header, InputComponent } from "./Transactions.server"

function Transaction({ children }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleHeight = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="tw-bg-[#201F29] tw-font-extralight">
        <Header />
        <div
          className={`tw-flex tw-flex-col tw-items-center tw-py-6  tw-mb-16  `}
        >
          <div
            className={`tw-grid tw-grid-cols-2 container tw-px-2 ${
              isOpen ? "open" : "closed"
            } `}
          >
            <InputComponent />
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
