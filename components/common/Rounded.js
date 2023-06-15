import React from "react"
import { icons } from "react-icons"
import { BiCricketBall } from "react-icons/bi"

function Rounded({ label, Icon, backgroundColor }) {
  return (
    <div
      className="tw-rounded-3xl tw-flex tw-justify-center tw-min-w-fit  tw-h-10 tw-mb-2 tw-px-4 tw-mx-2 tw-bg-yellow-400  tw-text-white"
      style={{ backgroundColor: backgroundColor }}
    >
      {Icon && <Icon fontSize={30} className="tw-my-auto" />}
      <p className="tw-self-center">{label}</p>
    </div>
  )
}

export { Rounded }
