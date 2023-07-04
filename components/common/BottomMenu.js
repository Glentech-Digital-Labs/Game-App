"use client"
import React from "react"
import {
  RiSettingsLine,
  GoHome,
  AiFillPlaySquare,
  BiMenu,
  BsPlayBtn,
} from "/utils/Icons"
import { useRouter } from "next/navigation"
import Link from "next/link"
function BottomMenu() {
  const router = useRouter()
  return (
    <div className=" tw-flex tw-h-20  tw-justify-around tw-fixed tw-min-w-full  tw-bottom-0 tw-z-10  tw-text-gray-300 bottom_layout">
      <div
        className="tw-flex tw-flex-col tw-justify-center"
        onClick={() => router.push("/home")}
      >
        <GoHome fontSize={24} className="tw-mx-auto" color="#5D5D66" />
        <p>Home</p>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center">
        <Link href={"/inplay"}>
          <AiFillPlaySquare
            fontSize={24}
            className="tw-mx-auto"
            color="#5D5D66"
          />
          <p>In Play</p>
        </Link>
      </div>

      <div className="tw-flex tw-flex-col tw-justify-center">
        <BsPlayBtn fontSize={24} className="tw-mx-auto" color="#5D5D66" />
        <p>Open Bet</p>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center">
        <BiMenu fontSize={24} className="tw-mx-auto" color="#5D5D66" />
        <p>Menu</p>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center">
        <RiSettingsLine fontSize={24} className="tw-mx-auto" color="#5D5D66" />
        <p>Setting</p>
      </div>
    </div>
  )
}

export { BottomMenu }
