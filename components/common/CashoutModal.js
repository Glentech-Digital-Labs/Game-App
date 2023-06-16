import React from "react"
import { BlackButton } from "./BlackButton"
import { YellowButton } from "./YellowButton"
//

function CashOutModal() {
  return (
    <>
      <div className="tw-flex tw-bg-[#36364A] tw-items-center tw-gap-2 tw-min-w-full tw-rounded-lg tw-px-2 tw-h-14">
        Cash Out
      </div>
      <div className="tw-mx-2 tw-my-4">
        <div className="tw-flex tw-justify-between">
          <h2>Liability</h2>
          <h2>&#8377; 100</h2>
        </div>
        <div className="tw-flex tw-justify-between tw-my-4">
          <h2>Cashout</h2>
          <h2 className="tw-text-green-300">&#8377; 400</h2>
        </div>
        <div className="tw-flex tw-justify-between ">
          <h2>Balance</h2>
          <h2 className="">&#8377; 500</h2>
        </div>
        <div className="tw-flex tw-my-4">
          If the odds change during submission,the amount may be increased
          ,rejected or partially accepted
        </div>
        <div className="tw-flex tw-w-full tw-mt-4">
          <BlackButton label={"cancel"} style={"tw-w-[48%]"} />
          <YellowButton label={"conform"} style={"tw-w-[48%] tw-ml-4"} />
        </div>
      </div>
    </>
  )
}

export { CashOutModal }
