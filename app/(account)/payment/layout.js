import React, { Suspense } from "react"
import Image from "next/image"

import Logo from "/public/images/Sportradar-log.svg"

import { BiWallet, BiUser } from "/utils/Icons"
import { YellowButton } from "@components/common"

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
            className="tw-px-2 tw-mx-2 tw-self-center"
            style={{ height: "2rem", width: "4rem" }}
          />
        </div>
      </div>
    </>
  )
}

function HomeLayout({ children }) {
  return (
    <section>
      <HeaderLayout />
      {children}
    </section>
  )
}

export default HomeLayout
