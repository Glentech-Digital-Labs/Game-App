import React from "react"

function BlackButton({ className, label }) {
  return (
    <button className={`BlackButton tw-text-white ${className}`}>
      {label}
    </button>
  )
}

export { BlackButton }
