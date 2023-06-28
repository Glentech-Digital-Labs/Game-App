import React from "react"

function YellowButton({ className, label, style, onClick, disable }) {
  return (
    <button
      className={`yellowButton tw-text-white ${className}`}
      style={style}
      disabled={disable}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export { YellowButton }
