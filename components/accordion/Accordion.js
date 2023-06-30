"use client"
import React, { useState } from "react"
import "./Accordion.css" // Create this CSS file for styling
import {
  AiOutlineExclamation,
  AiOutlineMinus,
  AiOutlinePlus,
} from "/utils/Icons"
import { BsFillTrophyFill } from "/utils/Icons"
import {
  BettingInput,
  CashOutModal,
  Loading,
  Rounded,
} from "@components/common"
import { Modal } from "@components/modal/Modal"
import { useModal } from "@hooks"

const AccordionChildItem = ({ item, marketType, marketId, eventId }) => {
  const [expanded, setExpanded] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [typeOfBet, setTypeOfBet] = useState("")
  const [loading, setLoading] = useState(false)

  const toggleItem = (betType) => {
    setExpanded(!expanded)
    setSelectedId(item.id)
    setTypeOfBet(betType)
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
                  {item.backPrices[1]["price"]}
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
                  {item.layPrices[1]["price"]}
                </span>
              </button>
            </div>
          </div>
        </div>
        {item.id == selectedId && expanded && (
          <div className="tw-px-2">
            <BettingInput
              marketType={marketType}
              typeOfBet={typeOfBet}
              team={item?.title}
              backPrice={item.backPrices[1]["price"]}
              layPrice={item.layPrices[1]["price"]}
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

const AccordionItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const { isModalOpen, toggle } = useModal()

  const toggleItem = (id) => {
    setExpanded(!expanded)
    setSelectedId(item.id)
  }

  return (
    <>
      <div className="accordion-item">
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
              {item.marketType}
            </h2>{" "}
          </div>
          <div className="tw-flex">
            {item.id == selectedId && expanded ? (
              <button
                className="tw-bg-[#03CD5D] tw-font-medium tw-text-12px tw-px-2 tw-py-1 tw-rounded-md tw-items-center tw-justify-center tw-flex tw-h-7 tw-w-24 tw-self-center tw-mr-2"
                onClick={toggle}
              >
                Cash out:500
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
            {item.marketSelections.map((childItem) => (
              <AccordionChildItem
                key={childItem.id}
                item={childItem}
                marketType={item.marketType}
                marketId={item.eventId}
                eventId={item.id}
              />
            ))}
          </div>
        )}
      </div>
      <Modal
        isModalOpen={isModalOpen}
        toggle={toggle}
        className={"tw-h-[30%] tw-ml-[-2] "}
        style={{ height: "38%", marginTop: "2rem" }}
      >
        <CashOutModal />
      </Modal>
    </>
  )
}

// You can put this for server side render
const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export { Accordion }
