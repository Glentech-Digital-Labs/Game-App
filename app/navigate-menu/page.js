"use client"
import { IconCards } from "@components"
import React, { Suspense } from "react"

// Needed to be refector Very important to do so,
// When get time Do it

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
  BsReceiptCutoff,
  AiFillBank,
} from "/utils/Icons"

import { useRouter } from "next/navigation"
import { setSportId } from "/redux/feature/sports/sportsSlice"
import { useDispatch } from "react-redux"

function NavigateCard({ Icon, label, navigateUrl }) {
  const router = useRouter()
  return (
    <div className="box_card ">
      <IconCards
        Icon={Icon}
        label={label}
        className={"tw-t-2"}
        onClick={() => router.push(`${navigateUrl}`)}
      />
    </div>
  )
}

function NavigateMenu() {
  const router = useRouter()
  const dispatch = useDispatch()

  function handleSportsRoute(id) {
    router.push("/home")
    dispatch(setSportId(id))
  }

  return (
    <>
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2 tw-border-1">
        Quicks Links
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-text-[#7E7E92] tw-px-2">
        <NavigateCard
          Icon={BsFillPlayBtnFill}
          label={"In play"}
          navigateUrl={`/home/inplay`}
        />
        <NavigateCard
          Icon={BsFillPeopleFill}
          label={"Membership"}
          navigateUrl={`/membership`}
        />
        <NavigateCard
          Icon={AiFillProfile}
          label={"Profile"}
          navigateUrl={`/profile`}
        />
        <NavigateCard
          Icon={AiFillGift}
          label={"Referral "}
          navigateUrl={`/Referral`}
        />
      </div>
      <div className="tw-bg-[#252530] tw-flex tw-justify-center tw-my-4 tw-py-2 tw-border-1">
        Popular Sports
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-text-[#7E7E92] tw-px-2">
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
        Payment
      </div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-text-[#7E7E92] tw-px-2">
        <NavigateCard
          Icon={MdAccountBalance}
          label={"Payment"}
          navigateUrl={`/payment`}
        />

        <NavigateCard
          Icon={AiFillBank}
          label={"Statement"}
          navigateUrl={`/statement`}
        />

        <NavigateCard
          Icon={FaMoneyBillWaveAlt}
          label={"Transaction"}
          navigateUrl={`/transactions`}
        />
        <NavigateCard
          Icon={BsReceiptCutoff}
          label={"Commission"}
          navigateUrl={`/commission`}
        />
      </div>
    </>
  )
}

export default NavigateMenu
