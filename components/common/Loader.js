import React from "react"
import "./index.css"
function Loader() {
  return (
    <div className="tw-absolute tw-w-24 tw-h-24 tw-top-1/2 tw-z-10 tw-left-[40%]">
      <div className="lds-roller ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export { Loader }
