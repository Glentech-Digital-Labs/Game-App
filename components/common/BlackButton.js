import React from "react"

function BlackButton({ className, label, onClick }) {
  return (
    <button
      className={`BlackButton tw-text-white ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export { BlackButton }
