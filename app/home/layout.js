import React, { Suspense } from "react"
import Image from "next/image"

import Logo from "../../public/images/Sportradar-log.svg"

import { BiWallet, BiUser } from "/utils/Icons"
import { BottomMenu, Rounded, YellowButton } from "@components/common"
import { BiCricketBall, BiFootball, BiTennisBall } from "/utils/Icons"
import { FaVolleyballBall } from "/utils/Icons"

export const metadata = {
  title: "OTP ",
  description: "Making Gaming App",
}
const grayColor = "#414150"
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
            className="tw-px-2 tw-mx-2 tw-self-center"
            style={{ height: "2rem", width: "4rem" }}
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
          backgroundColor={grayColor}
        />
        <Rounded
          Icon={BiTennisBall}
          label={"Tennis"}
          backgroundColor={grayColor}
        />
        <Rounded
          Icon={FaVolleyballBall}
          label={"Volleyball"}
          backgroundColor={grayColor}
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
