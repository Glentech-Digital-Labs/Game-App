import React from "react"
import "./index.css"

function Modal({ children, isModalOpen, toggle, className, style }) {
  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <div
            className={`modal-box ${className}`}
            onClick={(e) => e.stopPropagation()}
            style={style}
          >
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export { Modal }
