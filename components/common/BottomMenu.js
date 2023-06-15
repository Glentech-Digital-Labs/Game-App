import React from "react"
import { BsPlayBtn } from "react-icons/bs"
import { GoHome } from "react-icons/go"
import { RiSettingsLine } from "react-icons/ri"
import { AiFillPlaySquare } from "react-icons/ai"
import { BiMenu } from "react-icons/bi"
function BottomMenu() {
  return (
    <div className=" tw-flex tw-h-20  tw-justify-around tw-fixed tw-min-w-full  tw-bottom-0 tw-z-10  tw-text-gray-300 bottom_layout">
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
  )
}

export { BottomMenu }
