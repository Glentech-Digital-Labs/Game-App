import React from "react"

function NumberCard({ number }) {
  return (
    <div
      className="BlackButton tw-rounded-lg tw-px-4 tw-flex tw-justify-center tw-items-center tw-border-2"
      style={{ borderStyle: "outset", borderColor: "gray" }}
    >
      {number}
    </div>
  )
}

export { NumberCard }
