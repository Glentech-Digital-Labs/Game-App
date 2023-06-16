import React from "react"

function AmountCard({ amount, className }) {
  const isItYellow = className.includes("yellowButton")
  let borderColor
  if (isItYellow) {
    borderColor = "yellow"
  } else {
    borderColor = "gray"
  }
  return (
    <div
      className={`${className} tw-rounded-lg tw-w-24 tw-px-4 tw-flex  tw-items-center tw-justify-center tw-border-2 tw-mx-2`}
      style={{ borderStyle: "outset", borderColor: `${borderColor}` }}
    >
      &#8377;{amount}
    </div>
  )
}

export { AmountCard }
