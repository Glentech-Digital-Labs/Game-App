import { HeaderProfile, Referral } from "@components"
import React from "react"

import Logo from "../../public/images/Sportradar-log.svg"
import Image from "next/image"

function ReferralPage() {
  return (
    <div>
      <div className="header tw-flex tw-justify-between tw-w-screen tw-px-2 tw-mb-2">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo of sports star"
          className="tw-relative tw-align-baseline "
        />
        <HeaderProfile />
      </div>
      <Referral />
    </div>
  )
}

export default ReferralPage
