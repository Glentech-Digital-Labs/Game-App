import React, { Suspense } from "react"
import Image from "next/image"

import Logo from "/public/images/Sportradar-log.svg"

import { BiWallet, BiUser } from "/utils/Icons"
import {
  AmountCard,
  BlackButton,
  HeaderProfile,
  YellowButton,
} from "@components/common"
import { AiFillPlusCircle } from "react-icons/ai"
import CurrencyData from "/utils/currency.json"

export const metadata = {
  title: "OTP ",
  description: "Making Gaming App",
}

function HeaderLayout() {
  return (
    <>
      <div className="header tw-flex tw-justify-between">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo of sports star"
          className="tw-relative tw-align-baseline tw-ml-4"
        />
        <HeaderProfile />
      </div>
    </>
  )
}
let array = [2000, 3000, 4000, 5000, 6000]
function BottomLayout() {
  return (
    <>
      <div className="tw-flex tw-overflow-x-auto tw-my-4 remove-scroll-bar">
        <AmountCard className={"yellowButton tw-px-6"} amount={1000} />
        {/* {array.map((item, index) => (
          <AmountCard
            amount={item}
            className={"BlackButton"}
            setAmount={setAmount}
            key={item}
          />
        ))} */}
        <AmountCard className={"blackButton tw-px-6"} amount={2000} />
        <AmountCard className={"blackButton tw-px-6"} amount={3000} />
        <AmountCard className={"blackButton tw-px-6"} amount={4000} />
        <AmountCard className={"blackButton tw-px-6"} amount={5000} />
        <AmountCard className={"blackButton tw-px-6"} amount={6000} />
      </div>

      <div className="tw-bg-[#212128]  tw-pl-2 tw-py-3 tw-px-4 tw-mx-2 tw-rounded-lg tw-h-14 tw-my-4 tw-flex tw-items-center ">
        {CurrencyData["USD"]["symbol"]} 100
      </div>
      <div className="tw-bg-[#212128]  tw-pl-2 tw-py-3 tw-px-4 tw-mx-2 tw-rounded-lg tw-h-14 tw-flex tw-items-center">
        UTR Transition Number
      </div>

      <div className="tw-bg-[#212128] tw-border-2 tw-border-black tw-my-2 tw-flex tw-justify-center tw-items-center tw-relative tw-w-32 tw-h-32 tw-flex-col tw-ml-3">
        <input
          type="file"
          className=" tw-z-10 tw-absolute tw-opacity-0 tw-w-full tw-h-full"
        />
        <AiFillPlusCircle fontSize={32} className=" " />
        <p className="tw-text-center tw-mt-2">Payment proof screenshot </p>
      </div>
      <div className="tw-flex tw-fixed tw-bottom-4 tw-w-full">
        <YellowButton label={"Submit"} className={"tw-w-[48%]"} />
        <BlackButton label={"Cancel"} className={"tw-w-[48%] tw-ml-4"} />
      </div>
    </>
  )
}

function HomeLayout({ children }) {
  return (
    <section>
      <HeaderLayout />
      {children}
      {/* <BottomLayout /> */}
    </section>
  )
}

export default HomeLayout
