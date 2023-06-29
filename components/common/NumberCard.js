import React from "react"

function NumberCard({ number, numberHandler }) {
  return (
    <div
      className="BlackButton tw-rounded-lg  tw-flex tw-justify-center tw-items-center tw-border-2"
      style={{ borderStyle: "outset", borderColor: "#414149" }}
      onClick={() => numberHandler(number)}
    >
      {number}
    </div>
  )
}

export { NumberCard }
