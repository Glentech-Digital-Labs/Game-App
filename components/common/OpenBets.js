import React from "react"

function TeamBet({ className, teamName, odds, stake, profit }) {
  return (
    <>
      <div
        className={`${className}  tw-grid tw-grid-cols-5 tw-justify-center tw-items-center tw-gap-2 tw-min-w-full tw-rounded-lg tw-px-2 tw-h-10 tw-my-4`}
      >
        <div className="tw-col-span-2">{teamName}</div>
        <div className="tw-col-span-1 tw-to-bet-pink-color">{odds}</div>
        <div className="tw-col-span-1">{stake}</div>
        <div className="tw-col-span-1">{profit}</div>
      </div>
    </>
  )
}

function OpenBets() {
  return (
    <>
      <div className="tw-grid tw-grid-cols-5 tw-bg-[#36364A] tw-justify-center tw-items-center tw-gap-2 tw-min-w-full tw-rounded-lg tw-px-4 tw-h-14 tw-relative ">
        <div className="tw-col-span-2">Bet For</div>
        <div className="tw-col-span-1">Odds</div>
        <div className="tw-col-span-1">Stack</div>
        <div className="tw-col-span-1">Profit</div>
      </div>
      <div className="tw-overflow-y-auto tw-h-[85%] tw-px-4">
        <TeamBet
          className={"purple-bet-color "}
          teamName={"Chennai super"}
          odds={"2.32"}
          stake={"100.00"}
          profit={"2500.00"}
        />
        <TeamBet
          className={"purple-bet-color "}
          teamName={"Chennai super"}
          odds={"2.32"}
          stake={"100.00"}
          profit={"2500.00"}
        />
        <TeamBet
          className={"tw-bg-betPinkColor "}
          teamName={"Sawarup Data"}
          odds={"2.32"}
          stake={"100.00"}
          profit={"2500.00"}
        />
        <TeamBet
          className={`tw-bg-betPinkColor`}
          teamName={"Rajasthan "}
          odds={"2.32"}
          stake={"100.00"}
          profit={"2500.00"}
        />
        <TeamBet
          className={"purple-bet-color "}
          teamName={"Chennai super"}
          odds={"2.32"}
          stake={"100.00"}
          profit={"2500.00"}
        />{" "}
        <TeamBet
          className={"purple-bet-color "}
          teamName={"Chennai super"}
          odds={"2.32"}
          stake={"100.00"}
          profit={"2500.00"}
        />
        <TeamBet
          className={"purple-bet-color "}
          teamName={"Chennai super"}
          odds={"2.32"}
          stake={"100.00"}
          profit={"2500.00"}
        />
        <TeamBet
          className={"purple-bet-color "}
          teamName={"Chennai super"}
          odds={"2.32"}
          stake={"100.00"}
          profit={"2500.00"}
        />
      </div>
    </>
  )
}

export { OpenBets }
