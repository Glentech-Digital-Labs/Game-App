import React, { Suspense } from "react"
import Image from "next/image"

import { HeaderLayout } from "./HeaderLayout"
import { BottomMenu } from "@components/common"

export const metadata = {
  title: "OTP ",
  description: "Making Gaming App",
}

function HomeLayout({ children }) {
  return (
    <section className="tw-font-sf-font">
      <HeaderLayout />
      {children}
      <BottomMenu />
    </section>
  )
}

export default HomeLayout
