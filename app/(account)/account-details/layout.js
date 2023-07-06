import React, { Suspense } from "react"
import Image from "next/image"

import Logo from "/public/images/Sportradar-log.svg"

import { BiWallet, BiUser } from "/utils/Icons"
import { HeaderProfile, YellowButton } from "@components/common"

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

function HomeLayout({ children }) {
  return (
    <section>
      <HeaderLayout />
      {children}
    </section>
  )
}

export default HomeLayout
