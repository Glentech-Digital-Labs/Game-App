const { BettingInput, Loading } = require("@components/common")
const { useState } = require("react")
const { useSelector } = require("react-redux")

function calculateWinningOutcomesPAndL(teamId, placedBetData, setTeamBetId) {
  if (typeof teamId === null || typeof teamId === undefined) return

  return placedBetData.reduce((prev, bet) => {
    const { odds, amount } = bet
    if (bet.selectionId === teamId) {
      setTeamBetId(teamId)
      bet.betType === "BACK"
        ? (prev += amount * (odds - 1))
        : (prev -= amount * (odds - 1))
    } else {
      bet.betType === "BACK" ? (prev -= amount) : (prev += amount)
    }
    return prev
  }, 0)
}

const AccordionChildItem = ({
  item,
  marketTitle,
  marketId,
  eventId,
  typeOfBet,
  setTypeOfBet,
  setTeamBetId,
  setCheckoutAmount,
}) => {
  const [expanded, setExpanded] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [loading, setLoading] = useState(false)

  const placedBetData = useSelector(
    (state) => state.sportsContext.placedBetData
  )

  const toggleItem = (betType) => {
    setExpanded(!expanded)
    setSelectedId(item.id)
    setTypeOfBet(betType)
    let betPALData = calculateWinningOutcomesPAndL(
      item.id,
      placedBetData,
      setTeamBetId
    )
    setCheckoutAmount(betPALData)
  }

  return (
    <>
      {loading && <Loading />}
      <div className="accordion-item">
        <div className={`accordion-item-header ${expanded ? "expanded" : ""}`}>
          <div
            className={`tw-bg-transparent tw-flex tw-justify-between tw-border-b-2 tw-border-b-slate-800 b tw-h-16 tw-font-semibold tw-text-2xl  tw-items-center tw-px-2  `}
            // onClick={() => toggleChildAccordion(index)}
          >
            <h1 className="tw-text-14px tw-font-medium tw-font-sf-font">
              {item?.title}
            </h1>

            <div className="tw-flex tw-justify-end tw-font-inter-font">
              <button
                className=" tw-border-b-4 tw-border-[#5975B8]  tw-w-14 tw-h-12 tw-self-end tw-text-center betting-box tw-rounded-lg back-button"
                style={{
                  backgroundImage:
                    "linear-gradient(1deg, rgba(0, 74, 246, 0.15) 0%, rgba(128, 164, 248, 0.00) 100%), linear-gradient(141deg, #454441 0%, #1C1C1C 100%)",
                }}
                onClick={() => toggleItem("Back")}
              >
                <span className="tw-text-12px tw-font-extrabold">
                  {item.backPrices[0]?.["price"]}
                </span>
              </button>
              <button
                className="tw-border-b-4 tw-border-[#B87A85]  tw-w-14  tw-h-12 tw-self-end tw-ml-4 tw-text-center betting-box tw-rounded-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(1deg, rgba(255, 173, 188, 0.15) 0%, rgba(255, 173, 188, 0.00) 100%), linear-gradient(141deg, #454441 0%, #1C1C1C 100%)",
                }}
                onClick={() => toggleItem("Lay")}
              >
                <span className="tw-text-12px tw-font-extrabold">
                  {item.layPrices[0]?.["price"]}
                </span>
              </button>
            </div>
          </div>
        </div>
        {item.id == selectedId && expanded && (
          <div className="tw-px-2">
            <BettingInput
              marketTitle={marketTitle}
              typeOfBet={typeOfBet}
              team={item?.title}
              backPrice={item.backPrices[0]?.["price"]}
              layPrice={item.layPrices[0]?.["price"]}
              marketId={marketId}
              eventId={eventId}
              selectionId={item.id}
              setLoading={setLoading}
            />
          </div>
        )}
      </div>
    </>
  )
}

export { AccordionChildItem }
