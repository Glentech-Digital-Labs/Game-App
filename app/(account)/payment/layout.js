import React, { Suspense } from "react"
import { BottomMenu } from "@components/common"
import { HeaderLayout } from "./HeaderLayout"

const metadata = {
  title: "Payment ",
  description: "Making Gaming App",
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
