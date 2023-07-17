import Image from "next/image"

import Logo from "/public/images/Sportradar-log.svg"
import { BackButton, BottomMenu } from "@components"

const metadata = {
  title: "OTP ",
  description: "Making Gaming App",
}

function RootLayout({ children }) {
  return (
    <section>
      <div className="header tw-flex tw-items-center">
        <BackButton />
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo of sports star"
          className="tw-relative tw-align-baseline tw-ml-4"
        />
      </div>
      {children}
      <BottomMenu />
    </section>
  )
}

export default RootLayout
