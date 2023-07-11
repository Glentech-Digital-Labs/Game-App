"use client"
import React, { useState, useEffect } from "react"
import "./Accordion.css" // Create this CSS file for styling
import {
  AiOutlineExclamation,
  AiOutlineMinus,
  AiOutlinePlus,
} from "/utils/Icons"
import { BsFillTrophyFill } from "/utils/Icons"
import { CashOutModal } from "@components/common"
import { Modal } from "@components/modal/Modal"
import { useModal } from "@hooks"
import { AccordionChildItem } from "./AccordionChild"
import FetchData from "@utils/Fetcher"
import { useDispatch, useSelector } from "react-redux"
import { resetUser } from "@redux/feature/user/userSlice"
import { useRouter } from "next/navigation"
import { calculateCashoutAmount } from "@utils/utils"

function AccordionTopPart({
  expanded,
  item,
  selectedId,
  teamBetId,
  toggleItem,
  toggle,
  checkoutAmount,
}) {
  const [cashOut, setCashOut] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()
  // const selectionData = useSelector(
  //   (state) => state.socket.events_selection.data.markets
  // )

  const isItMatchOdds = item.marketTitle == "Match Odds"

  // useEffect(() => {
  //   async function getCashOutData() {
  //     if (!isItMatchOdds) {
  //       return ""
  //     }
  //     const response = await FetchData(
  //       `betting/event/${item.eventId}/cashout/execute`
  //     )
  //     if (response.success) {
  //       setCashOut(response.data)
  //       // calculateCashoutAmount(response.data)
  //     }
  //     if (response.status == "401") {
  //       dispatch(resetUser())
  //       router.push("/login")
  //     }
  //     if (!response.success) {
  //     }
  //   }
  //   getCashOutData()
  // }, [])

  return (
    <div
      className={`tw-bg-[#36363D] tw-flex tw-justify-between tw-h-14 tw-mt-4 tw-px-4  `}
    >
      <div
        className={`tw-flex accordion-item-header ${
          expanded ? "expanded" : ""
        }`}
      >
        <BsFillTrophyFill fontSize={12} className="tw-self-center" />{" "}
        <h2 className="tw-ml-2 tw-self-center tw-font-medium tw-text-12px">
          {item.marketTitle}
        </h2>{" "}
      </div>
      <div className="tw-flex">
        {item.id == selectedId && !!teamBetId && isItMatchOdds && expanded ? (
          <button
            className="tw-bg-[#03CD5D] tw-font-medium tw-text-12px tw-px-2 tw-py-1 tw-rounded-md tw-items-center tw-justify-center tw-flex tw-h-7 tw-w-fit tw-self-center tw-mr-2"
            onClick={toggle}
          >
            <span className="tw-flex">{`CashOut : ${parseFloat(cashOut).toFixed(
              0
            )}`}</span>
          </button>
        ) : (
          ""
        )}

        <div className="tw-self-center tw-rounded-full tw-bg-[#ffffff33] tw-p-1">
          <AiOutlineExclamation
            style={{
              transform: "rotate(180deg)",
            }}
            fontSize={18}
          />
        </div>

        <button className="tw-bg-slate-200  tw-w-9 tw-rounded-lg tw-h-5  tw-text-black tw-self-center tw-mx-2 tw-font-medium tw-text-10px">
          Rules{" "}
        </button>
        <div className="tw-flex tw-justify-center tw-items-center">
          {expanded ? (
            <AiOutlineMinus
              fontSize={17}
              className={`tw-self-center accordion__button `}
              onClick={() => toggleItem(item.id)}
            />
          ) : (
            <AiOutlinePlus
              fontSize={17}
              className={`tw-self-center accordion__button`}
              onClick={() => toggleItem(item.id)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const AccordionItem = ({ item, index }) => {
  const [expanded, setExpanded] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [typeOfBet, setTypeOfBet] = useState("")
  const { isModalOpen, toggle } = useModal()
  const [teamBetId, setTeamBetId] = useState("")
  const [checkoutAmount, setCheckoutAmount] = useState(0)
  const [cashOutModalData, setCashOutModalData] = useState([])

  const toggleItem = (id) => {
    setExpanded(!expanded)
    setSelectedId(id)
  }
  // This for first time open of things
  useEffect(() => {
    if (index == 1) {
      setExpanded(!expanded)
      setSelectedId(1)
    }
  }, [])

  useEffect(() => {
    async function getCashOutData() {
      const response = await FetchData(
        `betting/event/${item.eventId}/cashout/recept`
      )

      if (!!response.ok) {
        throw new Error("Error in fetching the cashout")
      }
      if (response.success) {
        setCashOutModalData(response.data)
      }
    }
    getCashOutData()
    return () => {}
  }, [])
  return (
    <>
      <div className="accordion-item">
        <AccordionTopPart
          item={item}
          toggleItem={toggleItem}
          expanded={expanded}
          teamBetId={teamBetId}
          selectedId={selectedId}
          toggle={toggle}
          checkoutAmount={checkoutAmount}
        />

        {expanded && (
          <div className="accordion-item-content">
            <div className="tw-bg-transparent tw-flex tw-justify-end tw-border-b-2 tw-border-b-slate-800 b tw-h-6 tw-font-semibold tw-text-2xl  tw-items-center">
              <h2 className="tw-mr-8 tw-font-inter-font tw-text-12px tw-font-semibold">
                Back
              </h2>
              <h2 className="tw-mr-4 tw-font-inter-font tw-text-12px tw-font-semibold">
                Lay
              </h2>
            </div>
            {item.marketSelections.map((childItem) => {
              return (
                <AccordionChildItem
                  key={childItem.id}
                  item={childItem}
                  selectionTitle={childItem.title}
                  marketId={childItem.marketId}
                  eventId={childItem.eventId}
                  marketTitle={item.marketTitle}
                  setTypeOfBet={setTypeOfBet}
                  typeOfBet={typeOfBet}
                  setTeamBetId={setTeamBetId}
                  setCheckoutAmount={setCheckoutAmount}
                  checkoutAmount={checkoutAmount}
                  teamBetId={teamBetId}
                />
              )
            })}
          </div>
        )}
      </div>
      <Modal
        isModalOpen={isModalOpen}
        toggle={toggle}
        className={"tw-h-[30%] tw-ml-[-2] "}
        style={{ height: "38%" }}
      >
        <CashOutModal cashOutModalData={cashOutModalData} toggle={toggle} />
      </Modal>
    </>
  )
}

// You can put this for server side render
const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}

export { Accordion }
