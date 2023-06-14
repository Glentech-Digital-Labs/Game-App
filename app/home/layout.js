import React, { Suspense } from "react"
import Image from "next/image"

import Logo from "../../public/images/Sportradar-log.svg"

import { BiWallet, BiUser, BiMenu } from "react-icons/bi"
import { Rounded, YellowButton } from "@components/common"
import { BiCricketBall, BiFootball, BiTennisBall } from "react-icons/bi"
import { FaVolleyballBall } from "react-icons/fa"
import { AiFillPlaySquare } from "react-icons/ai"
import { BsPlayBtn } from "react-icons/bs"
import { GoHome } from "react-icons/go"
import { RiSettingsLine } from "react-icons/ri"

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
        <div className="tw-flex  tw-justify-between">
          <div className="tw-flex tw-ml-4">
            <BiWallet className="tw-self-center" fontSize={30} />
            <span className="tw-self-center">$ 100</span>
          </div>
          <div className="tw-flex tw-align-middle tw-mx-4">
            <BiUser className="tw-self-center" fontSize={30} />
            <span className="tw-self-center">Rohit</span>
          </div>

          <YellowButton
            label={"+ Add"}
            style="tw-px-2 tw-mx-2 tw-self-center"
            inlineStyle={{ height: "2rem", width: "4rem" }}
          />
        </div>
      </div>
      <div
        className="tw-flex tw-w-full tw-my-4 tw-overflow-x-auto tw-min-w-full all_sports_icon "
        style={{ maxWidth: "100vw" }}
      >
        <Rounded
          Icon={BiCricketBall}
          label={"Cricket"}
          //   backgroundColor={"yellow"}
        />
        <Rounded
          Icon={BiFootball}
          label={"Football"}
          backgroundColor={"gray"}
        />
        <Rounded
          Icon={BiTennisBall}
          label={"Tennis"}
          backgroundColor={"gray"}
        />
        <Rounded
          Icon={FaVolleyballBall}
          label={"Volleyball"}
          backgroundColor={"gray"}
        />
      </div>
    </>
  )
}

function HomeLayout({ children }) {
  return (
    <section>
      <HeaderLayout />
      {children}
      <div className="bottom_nav tw-flex tw-h-20  tw-justify-around tw-sticky tw-bottom-0 tw-z-10  tw-text-gray-300 bottom_layout">
        <div className="tw-flex tw-flex-col tw-justify-center">
          <GoHome fontSize={24} className="tw-mx-auto" />
          <p>Home</p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center">
          <AiFillPlaySquare fontSize={24} className="tw-mx-auto" />
          <p>In Play</p>
        </div>

        <div className="tw-flex tw-flex-col tw-justify-center">
          <BsPlayBtn fontSize={24} className="tw-mx-auto" />
          <p>Open Bet</p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center">
          <BiMenu fontSize={24} className="tw-mx-auto" />
          <p>Menu</p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center">
          <RiSettingsLine fontSize={24} className="tw-mx-auto" />
          <p>Setting</p>
        </div>
      </div>
    </section>
  )
}

export default HomeLayout
