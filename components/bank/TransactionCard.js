import React from "react"
import CurrencyData from "../../utils/currency.json"
import "./index.css"

function TransactionCard({ status, amount }) {
  const currencySymbol = CurrencyData["USD"]["symbol"]
  const statusColor = status == "Approved" ? "#2EFF2E" : "#EF5B2C"
  const amountColor = status == "Approved" ? "#EFB873" : "#EF5B2C"
  return (
    <div className="match_card tw-rounded-xl tw-mt-4 ">
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
          <p style={{ color: statusColor }}>Approved</p>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-2 card_background tw-rounded-b-lg tw-px-2 tw-h-40  ">
        <div className="tw-col-span-1 tw-flex tw-flex-col  tw-justify-between ">
          <p>From</p>
          <p>currency</p>
          <p>Transfer type</p>
          <p>Request Date</p>
          <p>Approved Date</p>
        </div>
        <div className="tw-col-span-1 tw-flex tw-flex-col  tw-justify-between">
          <p>: Scanner</p>
          <p>: INR</p>
          <p>: Deposit</p>
          <p>: 23 May 2024 04:43 PM</p>
          <p>: 23 May 2024 04:43 PM</p>
        </div>
      </div>
    </div>
  )
}

export { TransactionCard }
