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
          className="yellowButton tw-rounded-lg tw-w-16 tw-h-8 tw-px-3  tw-flex  tw-items-center tw-justify-center tw-border-2 "
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
      <div className=" tw-mb-4 tw-grid tw-grid-cols-10 ">
        <div className="tw-col-span-8 tw-grid tw-grid-cols-6 tw-gap-2  ">
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
          className="BlackButton tw-rounded-lg tw-px-2 tw-flex tw-justify-center tw-items-center tw-border-2  tw-min-h-full tw-col-span-2 tw-mx-2 "
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
      return
    }
    setLayPoint((prev) => prev + 1)
    return
  }

  const betMinusHandler = (type) => {
    if (type === "backPoint") {
      if (Math.floor(backPoint) || Math.floor(layPoint) <= 0) {
        return
      }
      setBackPoint((prev) => prev - 1)
      return
    }
    setLayPoint((prev) => prev - 1)
  }
  return (
    <>
      <div className="tw-flex tw-justify-between tw-mx-2 ">
        <div className="backLay_main_button   ">
          <div
            className="backLay_side_button"
            style={{ borderStyle: "outset" }}
            onClick={() => betAddHandler("backPoint")}
          >
            +
          </div>
          {backPoint.toFixed(2)}
          <div
            className="backLay_side_button"
            style={{ borderStyle: "outset" }}
            onClick={() => betMinusHandler("backPoint")}
          >
            -
          </div>
        </div>
        <div className="backLay_main_button ">
          <div
            className="backLay_side_button "
            onClick={() => betAddHandler("layPoint")}
          >
            <AiOutlinePlus />
          </div>
          {layPoint.toFixed(2)}
          <div
            className="backLay_side_button "
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
      <div className="tw-flex tw-text-lg tw-h-8  tw-items-center tw-font-sf-font tw-text-12px tw-font-medium">
        <span className="tw-font-sf-font tw-text-12px tw-font-medium">
          Match odds
        </span>
        <AiOutlineArrowRight fontSize={16} className="tw-mx-2" />{" "}
        <span className="tw-font-sf-font tw-text-12px tw-font-medium">
          Back
        </span>{" "}
        <AiOutlineArrowRight fontSize={16} className="tw-mx-2" />
        <span className="tw-font-sf-font tw-text-12px tw-font-medium">
          Gujarat Titans
        </span>
      </div>
      <BackLayButtons />
      <div className="tw-flex tw-mt-4 ">
        <BlackButton label={"Cancel"} className={"tw-w-[48%] tw-mr-2"} />
        <YellowButton label={"Place Bet"} className={"tw-w-[48%]"} />
      </div>
      <AmountComponent />
      <NumberComponent />
    </div>
  )
}

export { BettingInput }
