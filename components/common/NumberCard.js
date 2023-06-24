import React from "react"

function NumberCard({ number }) {
  return (
    <div
      className="BlackButton tw-rounded-lg  tw-flex tw-justify-center tw-items-center tw-border-2"
      style={{ borderStyle: "outset", borderColor: "#414149" }}
    >
      {number}
    </div>
  )
}

export { NumberCard }
