"use client"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSportId, resetSportsId } from "/redux/feature/sports/sportsSlice"
import { useRef } from "react"

function Rounded({ label, Icon, backgroundColor, sportsId }) {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(0)
  let divRef = useRef("")

  const firstGradient = `159.46deg,
      #c4965b -45.75%,
      #efbe2c -45.75%,
      #b78a51 17.68%,
      #88612a 100.75%`

  let customStyle
  if (!!backgroundColor) {
    customStyle = { backgroundImage: backgroundColor }
  } else {
    customStyle = { backgroundImage: ` linear-gradient(${firstGradient})` }
  }

  function clickHandler(id) {
    dispatch(setSportId(id))
  }

  return (
    <div
      className="tw-rounded-3xl tw-cursor-pointer tw-flex tw-justify-center tw-min-w-fit tw-px-3 tw-w-24 tw-h-12 tw-my-2  tw-mx-2  tw-text-white  tw-border-2 tw-border-solid tw-border-[#201F2A]"
      style={customStyle}
      id={sportsId}
      ref={divRef}
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
    </div>
  )
}

export { Rounded }
