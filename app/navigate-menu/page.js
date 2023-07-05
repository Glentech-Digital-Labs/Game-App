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
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2 tw-border-1">
        Quicks Links
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-text-[#7E7E92]">
        <div className="box_card ">
          <IconCards
            Icon={BsFillPlayBtnFill}
            label={"In Play"}
            className={"tw-t-2"}
          />
        </div>
        <div className="box_card ">
          <IconCards
            Icon={AiFillGift}
            label={"Referral "}
            className={"tw-t-2"}
          />
        </div>
        <div className="box_card ">
          <IconCards
            Icon={AiFillStar}
            label={"My Market"}
            className={"tw-t-2"}
          />
        </div>
        <div className="box_card ">
          <IconCards Icon={FaHeadset} label={"setting"} className={"tw-t-2"} />
        </div>
      </div>
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2 tw-border-1">
        Popular Sports
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-text-[#7E7E92]">
        <div className="box_card ">
          <IconCards Icon={BiCricketBall} label={"Cricket"} />
        </div>
        <div className="box_card ">
          <IconCards Icon={IoMdFootball} label={"Football "} />
        </div>
        <div className="box_card ">
          <IconCards Icon={BiTennisBall} label={"Tennis"} />
        </div>
        <div className="box_card ">
          <IconCards Icon={GiBasketballBall} label={"BasketBall"} />
        </div>
      </div>
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2 tw-border-1">
        More From Us
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-text-[#7E7E92]">
        <div className="box_card ">
          <IconCards Icon={BsFillPlayBtnFill} label={"In Play"} />
        </div>
        <div className="box_card ">
          <IconCards Icon={AiFillGift} label={"Referral "} />
        </div>
        <div className="box_card ">
          <IconCards Icon={AiFillStar} label={"My Market"} />
        </div>
        <div className="box_card ">
          <IconCards Icon={FaHeadset} label={"setting"} />
        </div>
      </div>
    </div>
  )
}

export default NavigateMenu
