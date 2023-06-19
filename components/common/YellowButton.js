import React from "react"

function YellowButton({ className, label, style, onClick }) {
  return (
    <button
      className={`yellowButton tw-text-white ${className}`}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export { YellowButton }
