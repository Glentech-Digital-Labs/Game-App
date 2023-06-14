import React from "react"
import { BiCricketBall } from "react-icons/bi"

function Rounded({ label, Icon, backgroundColor }) {
  return (
    <div
      className="tw-rounded-3xl tw-flex tw-justify-center tw-w-26 tw-h-10 tw-mb-2 tw-px-2 tw-mx-2 tw-bg-yellow-400  tw-text-white"
      style={{ backgroundColor: backgroundColor }}
    >
      <Icon fontSize={30} className="tw-my-auto" />
      <p className="tw-self-center">{label}</p>
    </div>
  )
}

export { Rounded }
