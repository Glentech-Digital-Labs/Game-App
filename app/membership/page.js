"use client"
import { MemberCard } from "@components"
import React, { useRef, useEffect, useState } from "react"
import "./index.css"

function Membership() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const containerWidth = container.clientWidth
      const totalWidth = container.scrollWidth
      const slideWidth = containerWidth
      const currentIndex = Math.round(scrollLeft / slideWidth)

      setActiveIndex(currentIndex)
    }

    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <div className="tw-pt-8 slider-container" ref={containerRef}>
        <div className=" slider-content ">
          <div className={`slider-item  ${activeIndex === 0 ? "active" : ""}`}>
            <MemberCard label={"silver"} className={` silver_card  `} />
          </div>
          <div className={`slider-item ${activeIndex === 1 ? "active" : ""}`}>
            <MemberCard label={"Golden "} className={`golden_card `} />
          </div>
          <div className={`slider-item ${activeIndex === 2 ? "active" : ""}`}>
            <MemberCard label={"Diamond "} className={` diamond_card `} />
          </div>
          <div className={`slider-item ${activeIndex === 3 ? "active" : ""}`}>
            <MemberCard label={"Platinum "} className={` platinum_card `} />
          </div>
          <div className={`slider-item ${activeIndex === 4 ? "active" : ""}`}>
            <MemberCard label={"Emerald"} className={` emerald_card  `} />
          </div>
        </div>
      </div>
      <div className="tw-flex tw-w-48 tw-justify-between tw-items-center tw-mt-6 tw-mx-auto">
        <div
          className={`tw-w-10 tw-h-2  tw-rounded-xl ${
            activeIndex === 0 ? "tw-bg-white" : "tw-bg-slate-500"
          }`}
        ></div>
        <div
          className={`tw-w-10 tw-h-2  tw-rounded-xl ${
            activeIndex === 1 ? "tw-bg-white" : "tw-bg-slate-500"
          } tw-mx-2`}
        ></div>
        <div
          className={`tw-w-10 tw-h-2  tw-rounded-xl ${
            activeIndex === 2 ? "tw-bg-white" : "tw-bg-slate-500"
          }`}
        ></div>
        <div
          className={`tw-w-10 tw-h-2  tw-rounded-xl ${
            activeIndex === 3 ? "tw-bg-white" : "tw-bg-slate-500"
          } tw-mx-2`}
        ></div>
        <div
          className={`tw-w-10 tw-h-2  tw-rounded-xl ${
            activeIndex === 4 ? "tw-bg-white" : "tw-bg-slate-500"
          }`}
        ></div>
      </div>
    </>
  )
}

export default Membership
