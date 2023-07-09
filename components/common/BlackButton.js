import React from "react"

function BlackButton({ className, label, onClick, style }) {
  return (
    <button
      className={`BlackButton tw-text-white ${className}`}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export { BlackButton }
