"use client"
import React from "react"
import "./index.css"
import Lottie from "react-lottie-player"
import lottieJson from "utils/Sports_animate.json"
// function Loader() {
//   return (
//     <div className="tw-absolute tw-w-24 tw-h-24 tw-top-1/2 tw-z-10 tw-left-[40%]">
//       <div className="lds-roller ">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   )
// }

function Loader() {
  return (
    <>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 150, height: 150 }}
        className="loader-gif"
      />
      <span className="tw-absolute tw-top-[58%] tw-left-[32%] tw-translate-x-1/2 tw-translate-y-1/2 tw-text-lg tw-font-semibold tw-z-50">
        Loading...
      </span>
    </>
  )
}

export { Loader }
