import React from "react"

function BlackButton({ style, label }) {
  return (
    <button className={`BlackButton tw-text-white ${style}`}>{label}</button>
  )
}

export { BlackButton }
