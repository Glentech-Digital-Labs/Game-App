import React from "react"

function MatchCard({ back, lay, firstTeam, secondTeam, time }) {
  return (
    <div className="match_card tw-h-28 tw-w-full tw-flex tw-flex-col  tw-my-2">
      <div className="tw-flex tw-justify-end tw-mt-2">
        <span className=" tw-h-4 tw-w-4 tw-rounded-full tw-bg-green-400 tw-self-center tw-animate-pulse "></span>
        <p className="tw-self-center tw-mx-3 ">{time}</p>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-2 ">
        <div className="tw-flex tw-flex-col tw-text-lg tw-font-[500]">
          <h2 className="tw-my-2 tw-font-semibold tw-text-xl">{firstTeam}</h2>
          <h2 className="tw-font-semibold tw-text-xl">{secondTeam} </h2>
        </div>
        <div className="tw-flex tw-justify-end ">
          <button className=" tw-border-b-4 tw-border-indigo-500  tw-w-16 tw-h-10 tw-self-end tw-text-center betting-box tw-rounded-lg ">
            {back}
          </button>
          <button className="tw-border-b-4 tw-border-pink-400  tw-w-16  tw-h-10 tw-self-end tw-ml-4 tw-text-center betting-box tw-rounded-lg">
            {lay}
          </button>
        </div>
      </div>
    </div>
  )
}

export { MatchCard }
