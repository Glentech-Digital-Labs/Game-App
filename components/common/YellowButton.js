import React from "react"

function YellowButton({ style, label }) {
  return (
    <button className={`yellowButton tw-text-white ${style} tw-w-[90%]`}>
      {label}
    </button>
  )
}

export { YellowButton }
