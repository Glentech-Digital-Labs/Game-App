import React from "react"
import { BlackButton } from "./BlackButton"
import { YellowButton } from "./YellowButton"

function CashOutModal({ cashOutModalData, toggle, onClick }) {
  return (
    <>
      <div className="tw-flex tw-bg-[#36364A] tw-items-center tw-gap-2 tw-min-w-full tw-rounded-t-lg tw-px-2 tw-h-14">
        Cash Out
      </div>
      <div className="tw-mx-3 tw-my-4 tw-h-60">
        <div className="tw-flex tw-justify-between">
          <h2>Liability</h2>
          <h2>&#8377; {cashOutModalData.cashOutAmount?.toFixed(2)}</h2>
        </div>
        <div className="tw-flex tw-justify-between tw-my-4">
          <h2>Cashout</h2>
          <h2 className="tw-text-[#03CD5D]">
            &#8377; {cashOutModalData?.balance?.toFixed(2)}
          </h2>
        </div>
        <div className="tw-flex tw-justify-between ">
          <h2>Balance</h2>
          <h2 className="">&#8377; {cashOutModalData.amount?.toFixed(2)}</h2>
        </div>
        <div className="tw-flex tw-my-4 tw-text-14px">
          If the odds change during submission,the amount may be increased
          ,rejected or partially accepted
        </div>
        <div className="tw-flex tw-w-full tw-mt-4">
          <BlackButton
            label={"cancel"}
            className={"tw-w-[48%]"}
            onClick={toggle}
          />
          <YellowButton
            label={"conform"}
            className={"tw-w-[48%] tw-ml-4"}
            onClick={onClick}
          />
        </div>
      </div>
    </>
  )
}

export { CashOutModal }
