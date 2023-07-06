import { useToast } from "@hooks"
import { calculateWinningOutcomesPAndL, getBettingPrice } from "@utils/utils"

const { BettingInput, Loader, Shimmer, Toast } = require("@components/common")
const { useState, useEffect } = require("react")
const { useSelector } = require("react-redux")

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
  const oddsData = useSelector((state) => state.socket.events_selection.data)
  const [expanded, setExpanded] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isShowShimmer, setIsShowShimmer] = useState(false)
  const { isToastOpen, tostToggle } = useToast()

  const placedBetData = useSelector(
    (state) => state.sportsContext.placedBetData
  )

  let { backPrices, layPrices } = getBettingPrice(oddsData, item)

  const toggleItem = (betType) => {
    setExpanded((prev) => !prev)
    setSelectedId(item.id)
    setTypeOfBet(betType)
    let betPALData = calculateWinningOutcomesPAndL(
      item.id,
      placedBetData,
      setTeamBetId
    )
    setCheckoutAmount(betPALData)
  }

  useEffect(() => {
    setIsShowShimmer(true)
    return () => {
      setIsShowShimmer(false)
    }
  }, [backPrices])

  return (
    <>
      {loading && <Loader />}
      <Toast
        className={"tw-h-4"}
        isToastOpen={isToastOpen}
        tostToggle={tostToggle}
      >
        <span>Congratulation Bet is Placed</span>
      </Toast>
      <div className="accordion-item ">
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
                <span className={`tw-text-12px tw-font-extrabold`}>
                  {backPrices}
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
                <span className={`tw-text-12px tw-font-extrabold`}>
                  {layPrices}
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
              backPrice={backPrices}
              layPrice={layPrices}
              marketId={marketId}
              eventId={eventId}
              selectionId={item.id}
              setLoading={setLoading}
              setSelectedId={setSelectedId}
              setExpanded={setExpanded}
              tostToggle={tostToggle}
            />
          </div>
        )}
      </div>
    </>
  )
}

export { AccordionChildItem }
