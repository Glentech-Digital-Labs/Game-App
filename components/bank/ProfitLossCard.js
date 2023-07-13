import React from "react"

function ProfitLossCard({
  updatedAt,
  closingBal,
  activity,
  sports,
  date,
  amount,
  debit,
}) {
  return (
    <div className="match_card tw-my-4 tw-h-64 tw-border-[1px]  tw-border-gray-600 tw-mx-2  ">
      <div className="tw-flex tw-h-4/5 tw-flex-col tw-px-4  tw-py-2 tw-justify-between">
        <div className="tw-flex">
          <div className="tw-w-2/5">Credit</div>
          <div className="tw-w-3/5 ">
            :
            <span className="tw-bg-green-400 tw-px-2 tw-py-[2px] tw-rounded-full tw-ml-1 tw-text-center">
              {" "}
              {amount}
            </span>
          </div>
        </div>
        <div className="tw-flex">
          <div className="tw-w-2/5">Debit</div>
          <div className="tw-w-3/5">
            :
            <span className=" tw-bg-red-400 tw-px-2 tw-py-1 tw-rounded-full  tw-ml-1 tw-text-center">
              {debit}
            </span>
          </div>
        </div>
        <div className="tw-flex">
          <div className="tw-w-2/5">Activity</div>
          <div className="tw-w-3/5">
            :<span className="tw-ml-1">{activity}</span>
          </div>
        </div>
        <div className="tw-flex">
          <div className="tw-w-2/5">Closing Balance </div>
          <div className="tw-w-3/5">
            :<span className="tw-ml-1">{closingBal}</span>
          </div>
        </div>
        <div className="tw-flex">
          <div className="tw-w-2/5">Sports</div>
          <div className="tw-w-3/5">
            :<span className="tw-ml-1">{sports}</span>
          </div>
        </div>
      </div>
      <div className=" card_background tw-flex tw-items-center tw-h-1/5  tw-rounded-b-lg tw-justify-end  tw-min-w-full">
        <button className="tw-bg-goldenColor tw-px-2 tw-py-1 tw-rounded-full tw-mr-4">
          View All Bets
        </button>
      </div>
    </div>
  )
}

export { ProfitLossCard }
