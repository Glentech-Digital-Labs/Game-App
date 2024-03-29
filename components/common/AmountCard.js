"use client"
import React from "react"

function AmountCard({ amount, className, setAmount, id, setSelectedId }) {
  const isItYellow = className.includes("yellowButton")
  let borderColor
  if (isItYellow) {
    borderColor = "#EFB873"
  } else {
    borderColor = "#56565F"
  }

  function selectHandler() {
    setAmount(amount)
    setSelectedId(id)
  }

  return (
    <div
      className={`${className} tw-rounded-lg tw-w-16 tw-h-8 tw-px-3 tw-flex  tw-items-center tw-justify-center tw-border-2 tw-mx-2`}
      style={{ borderStyle: "outset", borderColor: `${borderColor}` }}
      onClick={() => selectHandler()}
    >
      &#8377;{amount}
    </div>
  )
}

export { AmountCard }
