import React from "react"
import { AiOutlineCrown } from "/utils/Icons"
import "./index.css"

function MemberCard({ label, className }) {
  return (
    <div className={`match_card tw-rounded-t-3xl  tw-min-w-full tw-mx-2`}>
      <div
        className={`${className}  tw-flex tw-justify-center tw-items-center tw-text-3xl tw-font-bold tw-h-12`}
      >
        {label}
      </div>
      <div className="tw-px-2 tw-py-4 tw-flex tw-flex-col tw-items-stretch tw-justify-between">
        Condition
        <div className="tw-flex tw-items-center tw-my-3">
          <AiOutlineCrown className="tw-mr-4" fontSize={24} />
          3% on every Deposit
        </div>
        <div className="tw-flex tw-items-center tw-my-3">
          <AiOutlineCrown className="tw-mr-3" fontSize={24} />
          1% on Weekly lose back bonus for live casino and Live Card
        </div>
        <div className="tw-flex tw-items-center tw-my-3">
          <AiOutlineCrown className="tw-mr-3" fontSize={24} />
          1% on Weekly lose back bonus for sportBook and Premium sportBook
        </div>
        Benefit
        <div className="tw-flex tw-items-center tw-my-3">
          <AiOutlineCrown className="tw-mr-3" fontSize={24} />
          3% on every Deposit
        </div>
        <div className="tw-flex tw-items-center tw-my-3">
          <AiOutlineCrown className="tw-mr-3" fontSize={24} />
          1% on Weekly lose back bonus for live casino and Live Card
        </div>
      </div>
    </div>
  )
}

export { MemberCard }
