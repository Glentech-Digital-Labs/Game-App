"use client"
import { IconCards } from "@components"
import React from "react"

import {
  GiBasketballBall,
  GrTransaction,
  IoMdFootball,
  BsFillPlayBtnFill,
  AiFillGift,
  AiFillStar,
  FaHeadset,
  BiTennisBall,
  BiCricketBall,
  AiFillHome,
  FaMoneyBillWaveAlt,
  MdAccountBalance,
  BsFillPeopleFill,
  AiFillProfile,
  BiHelpCircle,
} from "/utils/Icons"

import { useRouter } from "next/navigation"
import { setSportId, resetSportsId } from "/redux/feature/sports/sportsSlice"
import { useDispatch } from "react-redux"

function NavigateMenu() {
  const router = useRouter()
  const dispatch = useDispatch()

  function handleSportsRoute(id) {
    router.push("/home")
    dispatch(setSportId(id))
  }

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
            onClick={() => router.push("/home/inplay")}
          />
        </div>
        <div className="box_card ">
          <IconCards
            Icon={AiFillGift}
            label={"Referral "}
            className={"tw-t-2"}
            onClick={() => router.push("/Referral")}
          />
        </div>
        <div className="box_card ">
          <IconCards
            Icon={AiFillHome}
            label={"Home"}
            className={"tw-t-2"}
            onClick={() => router.push("/home")}
          />
        </div>
        <div className="box_card ">
          <IconCards
            Icon={FaMoneyBillWaveAlt}
            label={"Transaction"}
            className={"tw-t-2 tw-text-white"}
            onClick={() => router.push("/transactions")}
          />
        </div>
      </div>
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2 tw-border-1">
        Popular Sports
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-text-[#7E7E92]">
        <div className="box_card ">
          <IconCards
            Icon={BiCricketBall}
            label={"Cricket"}
            onClick={() => handleSportsRoute(4)}
          />
        </div>
        <div className="box_card ">
          <IconCards
            Icon={IoMdFootball}
            label={"Football "}
            onClick={() => handleSportsRoute(1)}
          />
        </div>
        <div className="box_card ">
          <IconCards
            Icon={BiTennisBall}
            label={"Tennis"}
            onClick={() => handleSportsRoute(2)}
          />
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
          <IconCards
            Icon={MdAccountBalance}
            label={"Payment "}
            onClick={() => router.push("/payment")}
          />
        </div>
        <div className="box_card " onClick={() => router.push("/membership")}>
          <IconCards Icon={BsFillPeopleFill} label={"Membership "} />
        </div>
        <div className="box_card ">
          <IconCards Icon={AiFillProfile} label={"Profile"} />
        </div>
        <div className="box_card ">
          <IconCards Icon={BiHelpCircle} label={"Contact us"} />
        </div>
      </div>
    </div>
  )
}

export default NavigateMenu
