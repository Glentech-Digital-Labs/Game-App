import React from "react"

function YellowButton({ style, label, inlineStyle }) {
  return (
    <button
      className={`yellowButton tw-text-white ${style}`}
      style={inlineStyle}
    >
      {label}
    </button>
  )
}

export { YellowButton }
