import React from "react"
import "./index.css"
import { MdCancel } from "/utils/Icons"

function Modal({ children, isModalOpen, toggle, className, style }) {
  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay tw-flex tw-flex-col " onClick={toggle}>
          <MdCancel
            fontSize={43}
            className=" tw-ml-80 tw-relative tw-z-10 tw-mb-[-8]"
            onClick={toggle}
          />
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
