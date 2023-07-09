import React from "react"

function IconCards({ Icon, className, label, onClick }) {
  return (
    <div
      className={`match_card tw-flex tw-flex-col tw-items-center ${className}`}
      onClick={onClick}
    >
      <Icon fontSize={32} className="tw-text-yellow-50" />
      <p>{label}</p>
    </div>
  )
}

export { IconCards }
