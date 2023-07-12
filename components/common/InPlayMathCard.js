import React from "react"

function InPlayMatchCard({
  title,
  teamA,
  teamB,
  time,
  backPrice,
  layPrice,
  onClick,
}) {
  return (
    <div
      className="match_card_home tw-h-32   tw-flex tw-flex-col tw-my-3 tw-border-1 tw-justify-evenly tw-border-[.5px] tw-border-[#797D86] "
      style={{
        marginLeft: ".5rem",
        marginRight: ".5rem",
        borderStyle: "outset",
      }}
      onClick={onClick}
    >
      <div className="tw-flex tw-justify-between  tw-mx-2">
        <p className="tw-text-14px tw-font-medium tw-text-[#797D86]">{title}</p>
        <div className="tw-flex tw-justify-between">
          <span className=" tw-h-2 tw-w-2 tw-rounded-full tw-bg-green-400 tw-self-center tw-animate-pulse "></span>
          <p className="tw-self-center tw-mx-3 tw-font-inter-font tw-font-semibold tw-text-10px ">
            {time}
          </p>
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-4 ">
        <div className="tw-flex tw-flex-col  tw-font-medium tw-text-14px">
          <h2 className="tw-py-1 ">{teamA}</h2>
          <h2 className="">{teamB} </h2>
        </div>
        <div className="tw-flex tw-justify-end ">
          <button
            className=" tw-border-b-4 tw-border-[#5975B8]  tw-w-14  tw-h-10 tw-self-end tw-text-center betting-box tw-rounded-lg back-button"
            style={{
              backgroundImage:
                "linear-gradient(1deg, rgba(0, 74, 246, 0.15) 0%, rgba(128, 164, 248, 0.00) 100%), linear-gradient(141deg, #454441 0%, #1C1C1C 100%)",
            }}
          >
            <span className="tw-text-12px tw-font-extrabold">{backPrice}</span>
          </button>
          <button
            className="tw-border-b-4 tw-border-[#B87A85]  tw-w-14  tw-h-10 tw-self-end tw-ml-4 tw-text-center betting-box tw-rounded-lg"
            style={{
              backgroundImage:
                "linear-gradient(1deg, rgba(255, 173, 188, 0.15) 0%, rgba(255, 173, 188, 0.00) 100%), linear-gradient(141deg, #454441 0%, #1C1C1C 100%)",
            }}
          >
            <span className="tw-text-12px tw-font-extrabold">{layPrice}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { InPlayMatchCard }
