import React from "react"
import { AiFillGift } from "react-icons/ai"

function IconCards({ Icon, className, label }) {
  return (
    <div className="match_card tw-flex tw-flex-col tw-items-center">
      <Icon fontSize={32} />
      <p>{label}</p>
    </div>
  )
}

export { IconCards }
