"use client"
import React, { useState } from "react"
import "./Accordion.css" // Create this CSS file for styling
import {
  AiOutlineExclamation,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai"
import { BsFillTrophyFill } from "react-icons/bs"
import { Rounded } from "@components/common"

const Accordion = ({ title, content, shouldOpen }) => {
  const [isOpen, setIsOpen] = useState(shouldOpen || false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  let type1 = content?.["type"]?.[0]
  let type2 = content?.["type"]?.[1]
  const Questions = Object.entries(content?.["Questions"] || [])

  return (
    <div className="accordion">
      <div
        className={`tw-bg-[#36363D] tw-flex tw-justify-between tw-h-14 tw-mt-4 tw-px-4 accordion-title accordion__button ${
          isOpen ? "open" : ""
        }`}
        onClick={toggleAccordion}
      >
        <div className="tw-flex">
          <BsFillTrophyFill fontSize={32} className="tw-self-center" />
          <h2 className="tw-ml-2 tw-self-center">{title}</h2>
        </div>
        <div className="tw-flex">
          <AiOutlineExclamation
            style={{ transform: "rotate(180deg)" }}
            fontSize={25}
            className="tw-self-center tw-bg-slate-300 tw-rounded-full"
          />
          <button className="tw-bg-slate-200 tw-px-4 tw-rounded-lg tw-h-8  tw-text-black tw-self-center tw-mx-3">
            Rules
          </button>
          {isOpen ? (
            <AiOutlineMinus fontSize={32} className="tw-self-center" />
          ) : (
            <AiOutlinePlus fontSize={32} className="tw-self-center" />
          )}
        </div>
      </div>

      <div className={`accordion__content ${isOpen ? "open" : ""}`}>
        {/* If title is fancy bet */}
        {/* Make a type of circular  */}
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
          <div
            className="tw-bg-transparent tw-flex tw-justify-between tw-border-b-2 tw-border-b-slate-800 b tw-h-20 tw-font-semibold tw-text-2xl  tw-items-center tw-px-2"
            key={index}
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
        ))}
      </div>
    </div>
  )
}

export { Accordion }
