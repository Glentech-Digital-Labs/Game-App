import React from "react"
import { AiFillLock } from "utils/Icons"

function MatchCard({ back, lay, firstTeam, secondTeam, time, inPlay }) {
  return (
    <div className="match_card tw-h-24 tw-w-full tw-flex tw-flex-col tw-my-3 tw-border-1 tw-justify-evenly tw-border-[.5px] tw-border-[#797D86]">
      <div className="tw-flex tw-justify-between tw-mt-2">
        <AiFillLock
          fontSize={20}
          className={`${
            inPlay ? "tw-invisible" : ""
          } tw-flex tw-justify-start tw-items-center tw-ml-2`}
        />

        <div>
          {/* <span className=" tw-h-2 tw-w-2 tw-rounded-full tw-bg-green-400 tw-self-center tw-animate-pulse "></span> */}
          <p className="tw-self-center tw-mx-3 tw-font-inter-font tw-font-semibold tw-text-10px ">
            {time}
          </p>
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-2 ">
        <div className="tw-flex tw-flex-col  tw-font-[500] tw-text-14px">
          <h2 className="tw-py-1 ">{firstTeam}</h2>
          <h2 className="">{secondTeam} </h2>
        </div>
        <div className="tw-flex tw-justify-end ">
          <button
            className=" tw-border-b-4 tw-border-[#5975B8]  tw-w-14  tw-h-10 tw-self-end tw-text-center betting-box tw-rounded-lg back-button"
            style={{
              backgroundImage:
                "linear-gradient(1deg, rgba(0, 74, 246, 0.15) 0%, rgba(128, 164, 248, 0.00) 100%), linear-gradient(141deg, #454441 0%, #1C1C1C 100%)",
            }}
          >
            <span className="tw-text-12px tw-font-extrabold">{back}</span>
          </button>
          <button
            className="tw-border-b-4 tw-border-[#B87A85]  tw-w-14  tw-h-10 tw-self-end tw-ml-4 tw-text-center betting-box tw-rounded-lg"
            style={{
              backgroundImage:
                "linear-gradient(1deg, rgba(255, 173, 188, 0.15) 0%, rgba(255, 173, 188, 0.00) 100%), linear-gradient(141deg, #454441 0%, #1C1C1C 100%)",
            }}
          >
            <span className="tw-text-12px tw-font-extrabold">{lay}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { MatchCard }
