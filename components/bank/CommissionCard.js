import React from "react"
import CurrencyData from "../../utils/currency.json"
import "./index.css"
import { formatDateTime, getRelativeTime } from "@utils/utils"
import { BiCricketBall } from "utils/Icons"

function CommissionCard({ amount, match, series, user, time }) {
  const currencySymbol = CurrencyData["INR"]["symbol"]

  let startTime = formatDateTime(time)

  let statusColor = "#2EFF2E"
  let amountColor = "#EFB873"

  return (
    <div className="match_card_commission tw-rounded-xl tw-mt-4 tw-mx-2 tw-mb-4">
      <div className=" card_background tw-px-4 tw-flex tw-items-center  tw-rounded-t-lg tw-justify-between tw-h-12">
        <span
          className=" tw-font-semibold tw-text-xl"
          style={{ color: amountColor }}
        >
          {currencySymbol}
          {amount}
        </span>
        <div className="tw-rounded-xl tw-border-2 tw-border-gray-600 tw-flex  tw-items-center tw-px-2">
          <span
            className={` tw-rounded-full  tw-ml-2  tw-mx-2 `}
            style={{ backgroundColor: statusColor }}
          >
            <BiCricketBall fontSize={14} />
          </span>
          <p style={{ color: statusColor }}>Cricket</p>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-3 card_background tw-rounded-b-lg tw-px-2 tw-h-36  tw-py-2">
        <div className="tw-col-span-1 tw-flex tw-flex-col tw-justify-between ">
          <p>User</p>
          <p>Match</p>
          <p>series</p>
          <p>Data</p>
        </div>
        <div className="tw-col-span-2 tw-flex tw-flex-col tw-justify-between">
          <p>: {user}</p>
          <p>: {match}</p>
          <p>: {series}</p>
          <p>: {startTime}</p>
        </div>
      </div>
    </div>
  )
}

export { CommissionCard }
