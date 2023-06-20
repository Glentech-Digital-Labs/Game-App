"use client"
import React, { useState } from "react"
import "./Accordion.css" // Create this CSS file for styling
import {
  AiOutlineExclamation,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai"
import { BsFillTrophyFill } from "react-icons/bs"
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
      <div className={`accordion__content ${isOpen ? "open" : ""}`}>
        {title === "Fancy Bet" && (
          <div className="tw-flex tw-overflow-x-auto">
            <Rounded label={"All"} backgroundColor="gray" />
            <Rounded label={"Wicket"} backgroundColor="gray" />
            <Rounded label={"Player"} backgroundColor="gray" />
            <Rounded label={"Fancy"} backgroundColor="gray" />
            <Rounded label={"Last digit"} backgroundColor="gray" />
          </div>
        )}

        <div className="tw-bg-transparent tw-flex tw-justify-end tw-border-b-2 tw-border-b-slate-800 b tw-h-10 tw-font-semibold tw-text-2xl  tw-items-center">
          <h2 className="tw-mr-8">{type1}</h2>
          <h2 className="tw-mr-4">{type2}</h2>
        </div>
        {Questions?.map((item, index) => (
          <div key={index}>
            <div
              className={`tw-bg-transparent tw-flex tw-justify-between tw-border-b-2 tw-border-b-slate-800 b tw-h-20 tw-font-semibold tw-text-2xl  tw-items-center tw-px-2 ${
                activeIndex === index ? "active" : ""
              } `}
              onClick={() => toggleChildAccordion(index)}
            >
              <h1>{item[0]}</h1>
              <div className="tw-flex tw-justify-end ">
                <button className=" tw-border-b-4 tw-border-[#5975B8]  tw-w-20 tw-h-16 tw-self-end tw-text-center betting-box tw-rounded-lg back-button  ">
                  {item[1][0][0]}
                </button>
                <button className="tw-border-b-4 tw-border-[#B87A85]  tw-w-20  tw-h-16 tw-self-end tw-ml-4 tw-text-center betting-box tw-rounded-lg">
                  {item[1][1][0]}
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
          <BsFillTrophyFill fontSize={32} className="tw-self-center" />
          <h2 className="tw-ml-2 tw-self-center">{title}</h2>
        </div>

        {activeIndex !== null && isOpen && (
          <button
            className="tw-bg-green-400 tw-px-2 tw-py-1 tw-rounded-md tw-items-center tw-justify-center tw-flex tw-h-8 tw-self-center tw-mr-2"
            onClick={toggle}
          >
            Cashout:500
          </button>
        )}

        <div className="tw-flex">
          <div className="tw-self-center tw-bg-slate-300 tw-rounded-full tw-p-1">
            <AiOutlineExclamation
              style={{ transform: "rotate(180deg)" }}
              fontSize={25}
            />
          </div>
          <button className="tw-bg-slate-200 tw-px-4 tw-rounded-lg tw-h-8  tw-text-black tw-self-center tw-mx-3">
            Rules
          </button>
          <div className="tw-flex tw-justify-center tw-items-center">
            {isOpen ? (
              <AiOutlineMinus
                fontSize={32}
                className={`tw-self-center accordion__button ${
                  isOpen ? "open" : ""
                }`}
                onClick={toggleAccordion}
              />
            ) : (
              <AiOutlinePlus
                fontSize={32}
                className={`tw-self-center accordion__button ${
                  isOpen ? "open" : ""
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
        className={"tw-h-[30%] tw-ml-[-2]"}
        style={{ height: "45%", marginTop: "5rem" }}
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
