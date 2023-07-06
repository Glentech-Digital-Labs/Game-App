import { calculateProfitAndLiability } from "@utils/utils"
import React from "react"

function TeamBet({ className, teamName, odds, amount, profit }) {
  return (
    <>
      <div
        className={`${className}  tw-grid tw-grid-cols-5 tw-justify-center tw-items-center tw-gap-2 tw-min-w-full tw-rounded-lg tw-px-2 tw-h-10 tw-my-4`}
      >
        <div className="tw-col-span-2">{teamName.slice(0, 12)}</div>
        <div className="tw-col-span-1 tw-to-bet-pink-color">
          {parseFloat(odds).toFixed(2)}
        </div>
        <div className="tw-col-span-1">{parseFloat(amount).toFixed(1)}</div>
        <div className="tw-col-span-1">{parseFloat(profit)?.toFixed(1)}</div>
      </div>
    </>
  )
}

function OpenBets({ betData }) {
  return (
    <>
      <div className="tw-grid tw-grid-cols-5 tw-bg-[#36364A] tw-justify-center tw-items-center tw-gap-2 tw-min-w-full tw-rounded-lg tw-px-4 tw-h-14 tw-relative ">
        <div className="tw-col-span-2">Bet For</div>
        <div className="tw-col-span-1">Odds</div>
        <div className="tw-col-span-1">Amount</div>
        <div className="tw-col-span-1">Profit</div>
      </div>
      <div className="tw-overflow-y-auto tw-h-[85%] tw-px-4">
        {betData?.map((betDetails) => {
          let className
          if (betDetails.betType == "LAY") {
            className = "tw-bg-betPinkColor"
          } else {
            className = "purple-bet-color"
          }
          const { profit } = calculateProfitAndLiability(
            betDetails.amount,
            betDetails.betType,
            betDetails.odds
          )
          return (
            <TeamBet
              className={className}
              teamName={betDetails["marketSelection.title"]}
              odds={betDetails.odds}
              amount={betDetails.amount}
              profit={profit}
              // key={betDetails.id}
              key={Math.random()}
            />
          )
        })}
      </div>
    </>
  )
}

export { OpenBets }
