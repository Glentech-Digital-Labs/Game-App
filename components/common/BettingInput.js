"use client"
import React, { useState } from "react"
import {
  AmountCard,
  BlackButton,
  NumberCard,
  YellowButton,
} from "@components/common"

import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { IoMdBackspace } from "react-icons/io"

function AmountComponent() {
  return (
    <>
      <div className="tw-flex tw-my-4 tw-overflow-x-auto tw-w-full">
        <div
          className="yellowButton tw-rounded-lg tw-w-24 tw-px-4 tw-flex  tw-items-center tw-justify-center tw-border-2 "
          style={{ borderStyle: "outset", borderColor: "yellow" }}
        >
          &#8377;100
        </div>
        <AmountCard amount={"200"} className={"BlackButton"} />
        <AmountCard amount={"300"} className={"BlackButton"} />
        <AmountCard amount={"400"} className={"BlackButton"} />
        <AmountCard amount={"500"} className={"BlackButton"} />
        <AmountCard amount={"600"} className={"BlackButton"} />
        <AmountCard amount={"700"} className={"BlackButton"} />
      </div>
    </>
  )
}

function NumberComponent() {
  return (
    <>
      <div className=" tw-my-4 tw-grid tw-grid-cols-10">
        <div className="tw-col-span-8 tw-grid tw-grid-cols-4 tw-gap-3  ">
          <NumberCard number={1} />
          <NumberCard number={2} />
          <NumberCard number={3} />
          <NumberCard number={4} />
          <NumberCard number={5} />
          <NumberCard number={6} />
          <NumberCard number={7} />
          <NumberCard number={8} />
          <NumberCard number={9} />
          <NumberCard number={0} />
          <NumberCard number={"00"} />
          <NumberCard number={"."} />
        </div>
        <div
          className="BlackButton tw-rounded-lg tw-px-2 tw-flex tw-justify-center tw-items-center tw-border-2  tw-min-h-full tw-col-span-2 tw-ml-2 "
          style={{ borderStyle: "outset", borderColor: "gray" }}
        >
          <IoMdBackspace fontSize={32} />
        </div>
      </div>
    </>
  )
}

function BackLayButtons() {
  const [backPoint, setBackPoint] = useState(3.14)
  const [layPoint, setLayPoint] = useState(1.32)

  const betAddHandler = (type) => {
    if (type === "backPoint") {
      setBackPoint((prev) => prev + 1)
    } else {
      setLayPoint((prev) => prev + 1)
    }
  }

  const betMinusHandler = (type) => {
    if (type === "backPoint") {
      if (Math.floor(backPoint) <= 0) {
        return
      }
      setBackPoint((prev) => prev - 1)
    } else {
      if (Math.floor(layPoint) <= 0) {
        return
      }
      setLayPoint((prev) => prev - 1)
    }
  }
  return (
    <>
      <div className="tw-flex ">
        <div
          className="tw-flex tw-bg-slate-700 tw-w-[48%] tw-justify-between tw-items-center tw-border-2 tw-rounded-lg tw-border-slate-500 "
          style={{ borderBlockStyle: "outset" }}
        >
          <div
            className="tw-bg-slate-500 tw-p-4 tw-rounded-lg tw-border-r-2 "
            style={{ borderStyle: "outset" }}
            onClick={() => betAddHandler("backPoint")}
          >
            <AiOutlinePlus />
          </div>
          {backPoint.toFixed(2)}
          <div
            className="tw-bg-slate-500 tw-p-4 tw-rounded-lg  tw-border-l-2   "
            style={{ borderStyle: "outset" }}
            onClick={() => betMinusHandler("backPoint")}
          >
            <AiOutlineMinus />
          </div>
        </div>
        <div
          className="tw-flex tw-bg-slate-700 tw-w-[48%] tw-justify-between tw-ml-2 tw-items-center tw-border-2 tw-rounded-lg tw-border-slate-500"
          style={{ borderBlockStyle: "outset" }}
        >
          <div
            className="tw-bg-slate-500 tw-p-4 tw-rounded-lg tw-border-r-2 "
            style={{ borderStyle: "outset" }}
            onClick={() => betAddHandler("layPoint")}
          >
            <AiOutlinePlus />
          </div>
          {layPoint.toFixed(2)}
          <div
            className="tw-bg-slate-500 tw-p-4 tw-rounded-lg  tw-border-l-2   "
            style={{ borderStyle: "outset" }}
            onClick={() => betMinusHandler("layPoint")}
          >
            <AiOutlineMinus />
          </div>
        </div>
      </div>
    </>
  )
}

function BettingInput() {
  return (
    <div className="tw-bg-[#2B2B31]   tw-pl-2 ">
      <div className="tw-flex tw-text-lg tw-h-12  tw-items-center">
        Match odds <AiOutlineArrowRight fontSize={24} className="tw-mx-2" />{" "}
        Back <AiOutlineArrowRight fontSize={24} className="tw-mx-2" /> Gujarat
        Titans
      </div>
      <BackLayButtons />
      <div className="tw-flex tw-mt-4">
        <BlackButton label={"Cancel"} style={"tw-w-[48%] tw-mr-2"} />
        <YellowButton label={"Place Bet"} className={"tw-w-[48%]"} />
      </div>
      <AmountComponent />
      <NumberComponent />
    </div>
  )
}

export { BettingInput }
