import React, { Children } from "react"
import "./index.css"
import { AiFillLock } from "/utils/Icons"
function LockedCard({ Children }) {
  return (
    <div className="card_overlay ">
      <div className="locked_card_lock tw-flex ">
        <AiFillLock
          fontSize={32}
          className="tw-self-center tw-translate-x-[500%]"
        />
      </div>
    </div>
  )
}

export { LockedCard }
