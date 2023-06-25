import { IconCards } from "@components"
import React from "react"
import { AiFillGift, AiFillStar } from "/utils/Icons"
import { BsFillPlayBtnFill } from "/utils/Icons"
import { FaHeadset } from "/utils/Icons"

import { IoMdFootball, IoTennisballSharp } from "/utils/Icons"
import { GiBasketballBall } from "/utils/Icons"

import { BiTennisBall, BiCricketBall } from "/utils/Icons"

function NavigateMenu() {
  return (
    <div>
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2">
        Quicks Links
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2">
        <IconCards Icon={BsFillPlayBtnFill} label={"In Play"} />
        <IconCards Icon={AiFillGift} label={"Referral "} />
        <IconCards Icon={AiFillStar} label={"My Market"} />
        <IconCards Icon={FaHeadset} label={"setting"} />
      </div>
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2">
        Popular Sports
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2">
        <IconCards Icon={BiCricketBall} label={"Cricket"} />
        <IconCards Icon={IoMdFootball} label={"Football "} />
        <IconCards Icon={BiTennisBall} label={"Tennis"} />
        <IconCards Icon={GiBasketballBall} label={"BasketBall"} />
      </div>
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2">
        More From Us
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2">
        <IconCards Icon={BsFillPlayBtnFill} label={"In Play"} />
        <IconCards Icon={AiFillGift} label={"Referral "} />
        <IconCards Icon={AiFillStar} label={"My Market"} />
        <IconCards Icon={FaHeadset} label={"setting"} />
      </div>
    </div>
  )
}

export default NavigateMenu
