import React from "react"
import "./index.css"

function MatchCardLoading() {
  return (
    <div
      className="match_card_skeleton tw-min-h-[4rem]  tw-flex tw-flex-col  tw-my-4 tw-border-1 skeleton tw-mt-4 tw-py-4"
      style={{
        marginLeft: "1rem",
        marginRight: "1rem",
        borderStyle: "outset",
      }}
    >
      <div className="tw-flex tw-justify-between tw-mt-2 tw-min-w-full skeleton tw-h-6 tw-my-2 ">
        <span className=" tw-ml-2 tw-w-2 tw-rounded-full  tw-self-center tw-animate-pulse tw-min-w-[30%] tw-h-4 bet-amount"></span>
        <p className="tw-self-center tw-mx-3 tw-rounded-full tw-font-inter-font tw-font-semibold tw-text-10px tw-min-w-[20%] tw-h-4 bet-amount "></p>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-2 tw-min-w-full ">
        <div className="tw-flex tw-flex-col  tw-font-[500] tw-text-14px tw-min-w-[30%] ">
          <h2 className="tw-py-1 tw-h-8 tw-w-28   bet-amount">{""}</h2>
          <h2 className="tw-h-8 tw-w-28  tw-mt-2 bet-amount"> {""}</h2>
        </div>
        <div className="tw-flex tw-justify-end tw-pr-4">
          <button className="   tw-w-14  tw-h-10 tw-self-end tw-text-center betting-box tw-rounded-lg back-button bet-amount">
            <span className="tw-text-12px tw-font-extrabold">{""}</span>
          </button>
          <button className="  tw-w-14  tw-h-10 tw-self-end tw-ml-4 tw-text-center betting-box tw-rounded-lg bet-amount ">
            <span className="tw-text-12px tw-font-extrabold">{""}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { MatchCardLoading }
