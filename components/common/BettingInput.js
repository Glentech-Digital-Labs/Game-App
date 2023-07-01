"use client"
import React, { useEffect, useState } from "react"
import {
  AmountCard,
  BlackButton,
  NumberCard,
  YellowButton,
} from "@components/common"

import {
  AiOutlineMinus,
  AiOutlinePlus,
  IoMdBackspace,
  AiOutlineArrowRight,
} from "/utils/Icons"
import FetchData from "@utils/Fetcher"

// Change of color on click is left has to do
let array = [200, 300, 400, 500, 600, 700]
function AmountComponent({ setAmount }) {
  return (
    <>
      <div className="tw-flex tw-my-4 tw-overflow-x-auto tw-w-full">
        <div
          className="yellowButton tw-rounded-lg tw-w-16 tw-h-8 tw-px-3  tw-flex  tw-items-center tw-justify-center tw-border-2 "
          style={{ borderStyle: "outset", borderColor: "yellow" }}
        >
          &#8377;100
        </div>
        {array.map((item, index) => (
          <AmountCard
            amount={item}
            className={"BlackButton"}
            setAmount={setAmount}
            key={item}
          />
        ))}
      </div>
    </>
  )
}

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function NumberComponent({ setAmount }) {
  function backHandler() {
    setAmount((prev) => prev.slice(0, -1))
  }
  function numberHandler(num) {
    const numString = num.toString()
    setAmount((prev) => prev + numString)
  }

  return (
    <>
      <div className=" tw-mb-4 tw-grid tw-grid-cols-10 ">
        <div className="tw-col-span-8 tw-grid tw-grid-cols-6 tw-gap-2  ">
          {numberList.map((item, idx) => (
            <NumberCard
              number={item}
              numberHandler={numberHandler}
              key={item}
            />
          ))}
          <NumberCard number={"00"} numberHandler={numberHandler} />
          <NumberCard number={"."} numberHandler={numberHandler} />
        </div>
        <div
          className="BlackButton tw-rounded-lg tw-px-2 tw-flex tw-justify-center tw-items-center tw-border-2  tw-min-h-full tw-col-span-2 tw-mx-2 "
          style={{ borderStyle: "outset", borderColor: "gray" }}
        >
          <IoMdBackspace fontSize={32} onClick={backHandler} />
        </div>
      </div>
    </>
  )
}

function BackLayButtons({
  backPrice,
  layPrice,
  typeOfBet,
  amount,
  setAmount,
  setBetPoint,
  betPoint,
}) {
  useEffect(() => {
    if (typeOfBet == "Back") {
      setBetPoint(backPrice)
    }
    if (typeOfBet == "Lay") {
      setBetPoint(layPrice)
    }
  }, [typeOfBet])

  const betHandler = (type) => {
    if (Math.floor(betPoint) <= 0) {
      return
    }
    if (type == "add") {
      setBetPoint((prev) => prev + 0.01)
    } else {
      setBetPoint((prev) => prev - 0.01)
    }
  }

  const amountHandler = (type) => {
    if (type == "add") {
      setAmount((prev) => prev + 1)
    } else {
      setAmount((prev) => prev - 1)
    }
  }

  return (
    <>
      <div className="tw-flex tw-justify-between tw-mx-2 ">
        <div className="backLay_main_button  ">
          <div
            className="backLay_side_button"
            style={{ borderStyle: "outset" }}
            onClick={() => betHandler("add")}
          >
            +
          </div>
          {betPoint.toFixed(2)}
          <div
            className="backLay_side_button"
            style={{ borderStyle: "outset" }}
            onClick={() => betHandler()}
          >
            -
          </div>
        </div>
        <div className="backLay_main_button ">
          <div
            className="backLay_side_button "
            onClick={() => amountHandler("add")}
          >
            <AiOutlinePlus />
          </div>
          {amount.toFixed(2)}
          <div className="backLay_side_button " onClick={() => amountHandler()}>
            <AiOutlineMinus />
          </div>
        </div>
      </div>
    </>
  )
}

function BettingInput({
  marketTitle,
  typeOfBet,
  team,
  backPrice,
  layPrice,
  marketId,
  eventId,
  selectionId,
  setLoading,
}) {
  const [amount, setAmount] = useState(0)
  const numberAmount = parseInt(amount)
  const [betPoint, setBetPoint] = useState(0)

  async function placeBetHandler() {
    setLoading(true)
    const response = await FetchData(
      `betting/event/${marketId}/market/${eventId}/place-bet`,
      {
        method: "POST",
        body: {
          betType: typeOfBet.toUpperCase(),
          odds: betPoint,
          selectionId: selectionId,
          stake: +amount,
        },
      }
    )
    if (response.success) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }

  return (
    <div className="tw-bg-[#2B2B31]   tw-pl-2 ">
      <div className="tw-flex tw-text-lg tw-h-8  tw-items-center tw-font-sf-font tw-text-12px tw-font-medium">
        <span className="tw-font-sf-font tw-text-12px tw-font-medium">
          {marketTitle}
        </span>
        <AiOutlineArrowRight fontSize={16} className="tw-mx-2" />{" "}
        <span className="tw-font-sf-font tw-text-12px tw-font-medium">
          {typeOfBet}
        </span>{" "}
        <AiOutlineArrowRight fontSize={16} className="tw-mx-2" />
        <span className="tw-font-sf-font tw-text-12px tw-font-medium">
          {team}
        </span>
      </div>
      <BackLayButtons
        backPrice={backPrice}
        layPrice={layPrice}
        typeOfBet={typeOfBet}
        amount={numberAmount}
        setAmount={setAmount}
        betPoint={betPoint}
        setBetPoint={setBetPoint}
      />
      <div className="tw-flex tw-mt-4 ">
        <BlackButton label={"Cancel"} className={"tw-w-[48%] tw-mr-2"} />
        <YellowButton
          label={"Place Bet"}
          className={"tw-w-[48%]"}
          onClick={placeBetHandler}
        />
      </div>
      <AmountComponent setAmount={setAmount} />
      <NumberComponent setAmount={setAmount} />
    </div>
  )
}

export { BettingInput }
