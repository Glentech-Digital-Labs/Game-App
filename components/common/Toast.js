"use client"
import React from "react"
import { MdCancel } from "react-icons/md"
function Toast({ children, isToastOpen, tostToggle, className, style }) {
  return (
    <>
      <div
        className={`toast_wrapper tw-rounded-full c ${
          isToastOpen ? "open" : "close"
        } ${className}`}
        style={style}
      >
        <MdCancel
          onClick={tostToggle}
          className="tw-top-[-6] tw-left-[-3] tw-rounded-full tw-absolute tw-bg-red-500"
        />
        {children}
      </div>
    </>
  )
}

export { Toast }
