"use client"
import React, { useState, useEffect } from "react"
import "./Accordion.css"
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

import { cashOutFunction, createOddsTable } from "@utils/cashOut"
import { setNewBet } from "@redux/feature/sports/sportsSlice"
import { useRouter } from "next/navigation"
import { delete_cookie } from "@utils/utils"
import { resetUser } from "@redux/feature/user/userSlice"
import { ToastContainer, toast } from "react-toastify"
import { NOTIFICATION_SETTING } from "utils/constants"
import protectRouteWithCookie from "@hooks/ProtectedRoute"

function AccordionTopPart({
  expanded,
  item,
  selectedId,
  teamBetId,
  toggleItem,
  toggle,
  checkoutAmount,
}) {
  const [cashOut, setCashOut] = useState([])

  const oddsData = useSelector((state) => state.socket.events_selection?.data)
  const isNewBetPlaced = useSelector((state) => state.sportsContext.newBet)

  const allBets = useSelector((state) => state.sportsContext.placedBetData)
  const isCashOutExecuted = !allBets[allBets.length - 1]?.isCB
  const [showCashOut, setShowCashOut] = useState(isCashOutExecuted)

  useEffect(() => {
    setShowCashOut(isCashOutExecuted)
  }, [isCashOutExecuted])

  useEffect(() => {
    if (
      oddsData !== null &&
      typeof oddsData !== "undefined" &&
      typeof oddsData !== "string"
    ) {
      Object.keys(oddsData?.["markets"] || {})?.map((item, index) => {
        if (oddsData["markets"][item]["name"] == "Match Odds") {
          const selections = oddsData["markets"][item]["selections"]
          let tables = createOddsTable(selections)
          let cashOutData = cashOutFunction(tables, allBets)
          setCashOut(cashOutData.toFixed(2))
        }
      })
    }
  }, [oddsData, isNewBetPlaced])

  const isItMatchOdds = item.marketTitle == "Match Odds"

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
        {item.id == selectedId &&
        // !!teamBetId && it was for selected item but no have to show for match odd
        cashOut != parseFloat(0) &&
        showCashOut &&
        isItMatchOdds &&
        expanded &&
        !!oddsData ? (
          <button
            className="tw-bg-[#03CD5D] tw-font-medium tw-text-12px tw-px-2 tw-py-1 tw-rounded-md tw-items-center tw-justify-center tw-flex tw-h-7 tw-w-fit tw-self-center tw-mr-2"
            onClick={toggle}
          >
            <span className="tw-flex">{`CashOut : ${parseFloat(cashOut).toFixed(
              1
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

const AccordionItem = ({ item, index, data }) => {
  const [expanded, setExpanded] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [typeOfBet, setTypeOfBet] = useState("")
  const { isModalOpen, toggle } = useModal()
  const [teamBetId, setTeamBetId] = useState("")
  const [checkoutAmount, setCheckoutAmount] = useState(0)
  const [cashOutModalData, setCashOutModalData] = useState([])
  const [currentBackLayPrice, setCurrentBackLayPrice] = useState({
    backPrice: "",
    layPrice: "",
  })
  const [cashOutExecute, setCashOutExecute] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()

  const toggleItem = (id) => {
    setExpanded(!expanded)
    setSelectedId(id)
  }
  // This for first time open of things
  useEffect(() => {
    if (index == 0) {
      setExpanded(!expanded)
      setSelectedId(item.id)
    }
  }, [])

  useEffect(() => {
    async function getCashOutData() {
      const response = await FetchData(
        `betting/event/${item.eventId}/cashout/recept`
      )

      if (!!response.ok) {
        throw new Error("Error in fetching the cashOut")
      }
      if (response.success) {
        setCashOutModalData(response.data)
      }
    }
    getCashOutData()
  }, [isModalOpen])

  async function executeCashOut() {
    const response = await FetchData(
      `betting/event/${item.eventId}/cashout/execute`
    )

    if (!!response.ok) {
      throw new Error("Error in fetching the Execute")
    }
    if (!response.success) {
      if (
        response.message == "user un-authenticated, authentication required."
      ) {
        toast.warn("UN-authenticated", {
          ...NOTIFICATION_SETTING,
        })
        delete_cookie("sessionId")
        dispatch(resetUser())
        router.push("/login")
      } else {
        toast.warn(`${response.message}`, {
          ...NOTIFICATION_SETTING,
        })
      }
      toggle()
    }

    if (response.success) {
      dispatch(setNewBet())
      setCashOutExecute(response.data)
      toast.success("Executed cashout", {
        ...NOTIFICATION_SETTING,
      })
      toggle()
    }
  }

  function betInformation(status, message) {
    if (status == "success") {
      toast.success("Congratulation Bet placed", {
        ...NOTIFICATION_SETTING,
      })
    }
    if (status == "error") {
      toast.success(`${message}`, {
        ...NOTIFICATION_SETTING,
      })
    }
  }

  return (
    <>
      <ToastContainer />
      <Modal
        isModalOpen={isModalOpen}
        toggle={toggle}
        className={" tw-ml-[-2] "}
        style={{ height: "45%" }}
      >
        <CashOutModal
          cashOutModalData={cashOutModalData}
          toggle={toggle}
          onClick={executeCashOut}
        />
      </Modal>
      <div className="accordion-item ">
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
          <div className="accordion-item-content ">
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
                  setCurrentBackLayPrice={setCurrentBackLayPrice}
                  grandParentExpand={setExpanded}
                  betInformation={betInformation}
                />
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

// You can put this for server side render
const AccordionMain = ({ data }) => {
  let matchOddsData = []
  let nonMatchOddsData = []

  data.map((item, index) => {
    if (item.marketTitle == "Match Odds") {
      matchOddsData.push(item)
    } else {
      nonMatchOddsData.push(item)
    }
  })
  let modifiedData = [...matchOddsData, ...nonMatchOddsData]
  return (
    <div className="accordion " style={{ paddingBottom: "6rem" }}>
      {modifiedData.map((item, index) => {
        return (
          <AccordionItem key={item.id} item={item} index={index} data={data} />
        )
      })}
    </div>
  )
}
let Accordion = protectRouteWithCookie(AccordionMain)

export { Accordion }
