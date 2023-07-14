import React from "react"
import CurrencyData from "../../utils/currency.json"
import "./index.css"
import { getRelativeTime } from "@utils/utils"

function TransactionCard({
  status,
  amount,
  approvedDate,
  requestData,
  currency,
  type,
  closingBalance,
}) {
  const currencySymbol = CurrencyData["INR"]["symbol"]
  let statusColor
  let amountColor
  let approvedData = getRelativeTime(approvedDate)
  let requestDate = getRelativeTime(requestData)

  if (status == "COMPLETED") {
    statusColor = "#2EFF2E"
    amountColor = "#EFB873"
  }

  if (status == "REJECTED") {
    statusColor = "#EF5B2C"
    amountColor = "#EF5B2C"
  }
  if (status == "PENDING") {
    statusColor = "#FF647E"
    amountColor = "#FF647E"
  }
  return (
    <div className="match_card tw-rounded-xl tw-mt-4 tw-mx-2">
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
            className={`tw-w-4 tw-h-4 tw-rounded-full tw-animate-pulse tw-ml-2  tw-mx-2 `}
            style={{ backgroundColor: statusColor }}
          ></span>
          <p style={{ color: statusColor }}>{status}</p>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-2 card_background tw-rounded-b-lg tw-px-2 tw-h-40  ">
        <div className="tw-col-span-1 tw-flex tw-flex-col  tw-justify-between ">
          <p>Closing balance</p>
          <p>Currency</p>
          <p>Transfer type</p>
          <p>Request Date</p>
          <p>Approved Date</p>
        </div>
        <div className="tw-col-span-1 tw-flex tw-flex-col  tw-justify-between">
          <p>: {closingBalance}</p>
          <p>: {currency}</p>
          <p>: {type}</p>
          <p>: {requestDate}</p>
          <p>: {approvedData}</p>
        </div>
      </div>
    </div>
  )
}

export { TransactionCard }
