"use client"
import React from "react"
import CurrencyData from "/utils/currency.json"
import { BiWallet } from "/utils/Icons"
import { TransactionCard } from "./TransactionCard"
import { BlackButton, YellowButton } from "@components/common"
import { Input } from "@components/common/InputComponent"

function Header({ currencySymbol }) {
  return (
    <div className="match_card tw-h-48 tw-mx-2  ">
      <div className="tw-mx-2">
        <p className="tw-font-medium tw-mt-4 ">Total Amount WithDraw</p>
        <p className="tw-text-[#EFB873] tw-text-3xl tw-font-bold tw-my-2 ">
          {" "}
          {currencySymbol} 79,000
        </p>
      </div>
      <div className="tw-flex tw-mx-2 ">
        <div
          className="tw-bg-[#2B2B31] tw-border-2 tw-border-black tw-flex tw-items-center  tw-mr-2 tw-px-4 tw-w-2/5 tw-rounded-t-xl"
          style={{ borderStyle: "outset" }}
        >
          <div
            className="tw-bg-[#3B3B42] tw-rounded-full tw-p-2 tw-flex tw-my-2 "
            style={{ borderStyle: "outset" }}
          >
            <BiWallet fontSize={32} className="tw-self-center" />
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-ml-2">
            Balance
            <span className="tw-font-semibold">7500</span>
          </div>
        </div>
        <div
          className="tw-bg-[#2B2B31] tw-border-2 tw-border-black tw-flex tw-justify-center tw-items-center tw-w-3/5 tw-rounded-xl"
          style={{ borderStyle: "outset" }}
        >
          <div
            className="tw-bg-[#3B3B42] tw-rounded-full  tw-p-2"
            style={{ borderStyle: "outset" }}
          >
            <BiWallet fontSize={32} />
          </div>
          <div className="tw-flex tw-flex-col  tw-ml-2">
            Available amount
            <span className="tw-font-semibold">7500</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AmountWithdraw() {
  const currencySymbol = CurrencyData["USD"]["symbol"]
  return (
    <>
      <Header currencySymbol={currencySymbol} />
      <div className="tw-bg-[#36363D] tw-flex tw-items-center tw-my-4 tw-py-3 tw-px-2">
        Pending WithDrawals
      </div>
      <div className="tw-mx-2">
        <TransactionCard />
      </div>
      <div className="tw-bg-[#36363D] tw-flex tw-items-center tw-my-4 tw-py-3 tw-px-2 tw-justify-between">
        Bank Details
        <BlackButton label={"+ Add New "} className={"tw-px-2 "} />
      </div>
      <div className="tw-mx-2">
        <Input
          placeholder={"Enter Code"}
          label={"Amount"}
          type={"text"}
          pattern={"^${.5}"}
          value={"1500"}
          setValue={() => {}}
          className={"tw-h-14  "}
        />
      </div>
      <YellowButton
        label={"WithDraw"}
        className={"tw-w-[90%] tw-mx-2 tw-mt-4"}
      />
      <div className="match_card tw-mt-4 tw-mx-2">
        <div className="tw-flex  tw-my-4 tw-justify-between tw-items-start">
          <div className=" tw-bg-white tw-w-8 tw-h-4 tw-rounded-full tw-mx-4 tw-mt-2"></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quasi ratione similique
          </p>
        </div>
        <div className="tw-flex  tw-my-4 tw-justify-between tw-items-start">
          <div className=" tw-bg-white tw-w-8 tw-h-4 tw-rounded-full tw-mx-4 tw-mt-2"></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quasi ratione similique
          </p>
        </div>
        <div className="tw-flex  tw-my-4 tw-justify-between tw-items-start">
          <div className=" tw-bg-white tw-w-8 tw-h-4 tw-rounded-full tw-mx-4 tw-mt-2"></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quasi ratione similique
          </p>
        </div>
      </div>
    </>
  )
}

export { AmountWithdraw }
