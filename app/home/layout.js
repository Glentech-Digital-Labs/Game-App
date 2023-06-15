import React, { Suspense } from "react"
import Image from "next/image"

import Logo from "../../public/images/Sportradar-log.svg"

import { BiWallet, BiUser } from "react-icons/bi"
import { BottomMenu, Rounded, YellowButton } from "@components/common"
import { BiCricketBall, BiFootball, BiTennisBall } from "react-icons/bi"
import { FaVolleyballBall } from "react-icons/fa"

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
      <BottomMenu />
    </section>
  )
}

export default HomeLayout
