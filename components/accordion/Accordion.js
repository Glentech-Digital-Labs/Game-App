"use client"
import React, { useState } from "react"
import "./Accordion.css" // Create this CSS file for styling
import {
  AiOutlineExclamation,
  AiOutlineMinus,
  AiOutlinePlus,
} from "/utils/Icons"
import { BsFillTrophyFill } from "/utils/Icons"
import { BettingInput, CashOutModal, Rounded } from "@components/common"
import { Modal } from "@components/modal/Modal"
import { useModal } from "@hooks"

function SecondModal({
  toggleChildAccordion,
  isOpen,
  activeIndex,
  title,
  content,
}) {
  let type1 = content?.["type"]?.[0]
  let type2 = content?.["type"]?.[1]
  const Questions = Object.entries(content?.["Questions"] || [])
  return (
    <>
      <div className={`accordion__content ${isOpen ? "open" : ""} `}>
        {title === "Fancy Bet" && (
          <div className="tw-flex tw-overflow-auto ">
            <Rounded label={"All"} backgroundColor="gray" />
            <Rounded label={"Wicket"} backgroundColor="gray" />
            <Rounded label={"Player"} backgroundColor="gray" />
            <Rounded label={"Fancy"} backgroundColor="gray" />
            <Rounded label={"Last digit"} backgroundColor="gray" />
          </div>
        )}

        <div className="tw-bg-transparent tw-flex tw-justify-end tw-border-b-2 tw-border-b-slate-800 b tw-h-6 tw-font-semibold tw-text-2xl  tw-items-center">
          <h2 className="tw-mr-8 tw-font-inter-font tw-text-12px tw-font-semibold">
            {type1}
          </h2>
          <h2 className="tw-mr-4 tw-font-inter-font tw-text-12px tw-font-semibold">
            {type2}
          </h2>
        </div>
        {Questions?.map((item, index) => (
          <div key={index}>
            <div
              className={`tw-bg-transparent tw-flex tw-justify-between tw-border-b-2 tw-border-b-slate-800 b tw-h-16 tw-font-semibold tw-text-2xl  tw-items-center tw-px-2 ${
                activeIndex === index ? "active" : ""
              } `}
              onClick={() => toggleChildAccordion(index)}
            >
              <h1 className="tw-text-14px tw-font-medium tw-font-sf-font">
                {item[0]}
              </h1>
              <div className="tw-flex tw-justify-end tw-font-inter-font">
                <button
                  className=" tw-border-b-4 tw-border-[#5975B8]  tw-w-14 tw-h-12 tw-self-end tw-text-center betting-box tw-rounded-lg back-button"
                  style={{
                    backgroundImage:
                      "linear-gradient(1deg, rgba(0, 74, 246, 0.15) 0%, rgba(128, 164, 248, 0.00) 100%), linear-gradient(141deg, #454441 0%, #1C1C1C 100%)",
                  }}
                >
                  <span className="tw-text-12px tw-font-extrabold">
                    {item[1][0][0]}
                  </span>
                </button>
                <button
                  className="tw-border-b-4 tw-border-[#B87A85]  tw-w-14  tw-h-12 tw-self-end tw-ml-4 tw-text-center betting-box tw-rounded-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(1deg, rgba(255, 173, 188, 0.15) 0%, rgba(255, 173, 188, 0.00) 100%), linear-gradient(141deg, #454441 0%, #1C1C1C 100%)",
                  }}
                >
                  <span className="tw-text-12px tw-font-extrabold">
                    {item[1][1][0]}
                  </span>
                </button>
              </div>
            </div>

            {activeIndex === index && (
              <div className="answer">
                <BettingInput />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

const Accordion = ({ title, content, shouldOpen }) => {
  const [isOpen, setIsOpen] = useState(shouldOpen || false)
  const { isModalOpen, toggle } = useModal()

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleChildAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion">
      <div
        className={`tw-bg-[#36363D] tw-flex tw-justify-between tw-h-14 tw-mt-4 tw-px-4 accordion-title `}
      >
        <div className="tw-flex">
          <BsFillTrophyFill fontSize={12} className="tw-self-center" />
          <h2 className="tw-ml-2 tw-self-center tw-font-medium tw-text-12px">
            {title}
          </h2>
        </div>

        <div className="tw-flex">
          {activeIndex !== null && isOpen && (
            <button
              className="tw-bg-[#03CD5D] tw-font-medium tw-text-12px tw-px-2 tw-py-1 tw-rounded-md tw-items-center tw-justify-center tw-flex tw-h-7 tw-w-24 tw-self-center tw-mr-2"
              onClick={toggle}
            >
              Cashout:500
            </button>
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
            Rules
          </button>
          <div className="tw-flex tw-justify-center tw-items-center">
            {isOpen ? (
              <AiOutlineMinus
                fontSize={17}
                className={`tw-self-center accordion__button ${
                  isOpen ? "open" : ""
                }`}
                onClick={toggleAccordion}
              />
            ) : (
              <AiOutlinePlus
                fontSize={17}
                className={`tw-self-center accordion__button ${
                  isOpen ? "" : "open"
                }`}
                onClick={toggleAccordion}
              />
            )}
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        toggle={toggle}
        className={"tw-h-[30%] tw-ml-[-2] "}
        style={{ height: "38%", marginTop: "2rem" }}
      >
        <CashOutModal />
      </Modal>
      <SecondModal
        toggleChildAccordion={toggleChildAccordion}
        isOpen={isOpen}
        activeIndex={activeIndex}
        title={title}
        content={content}
      />
    </div>
  )
}

export { Accordion }
