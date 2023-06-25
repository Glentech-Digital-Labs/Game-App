import React from "react"

function IconCards({ Icon, className, label }) {
  return (
    <div
      className={`match_card tw-flex tw-flex-col tw-items-center ${className}`}
    >
      <Icon fontSize={32} />
      <p>{label}</p>
    </div>
  )
}

export { IconCards }
