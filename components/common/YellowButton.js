import React from "react"

function YellowButton({ className, label, style }) {
  return (
    <button className={`yellowButton tw-text-white ${className}`} style={style}>
      {label}
    </button>
  )
}

export { YellowButton }
