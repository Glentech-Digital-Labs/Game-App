"use client"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSportId, resetSportsId } from "/redux/feature/sports/sportsSlice"
import { receiveData } from "/redux/feature/socket/socketSlice"
import "./index.css"

function Rounded({ label, Icon, backgroundColor, sportsId }) {
  const dispatch = useDispatch()
  const selectId = useSelector((state) => state.sportsContext)
  const [sportsIds, setSportsIDs] = useState(1)

  const [backColor, setBackColor] = useState("")

  function clickHandler(id) {
    dispatch(setSportId(id))
    // setSportsIDs(id)
  }
  useEffect(() => {
    if (selectId.sportsId === sportsId) {
      setBackColor("yellow_round")
    }
    if (selectId.sportsId !== sportsId) {
      setBackColor("gray_round")
    }
  }, [selectId.sportsId])

  return (
    <button
      className={`${backColor} tw-rounded-3xl tw-cursor-pointer tw-flex tw-justify-center tw-min-w-fit tw-px-3 tw-w-24 tw-h-12 tw-my-2  tw-mx-2  tw-text-white  tw-border-2 tw-border-solid tw-border-[#201F2A]`}
      style={{ backgroundColor: backColor.toString() }}
      id={sportsId}
      onClick={() => clickHandler(sportsId)}
    >
      {Icon && (
        <Icon
          fontSize={24}
          className={`tw-my-auto ${
            !!backgroundColor ? "tw-text-[#4C4C60]" : ""
          }`}
        />
      )}
      <p
        className={`tw-self-center tw-font-semibold tw-text-14px tw-ml-2 ${
          !!backgroundColor ? "tw-text-[#4C4C60]" : ""
        }`}
      >
        {label}
      </p>
    </button>
  )
}

export { Rounded }
