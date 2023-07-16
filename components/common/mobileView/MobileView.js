"use client"
import React, { useEffect, useState } from "react"

const MobileView = ({ children }) => {
  const [width, setWidth] = useState("")
  let isMobile = window.innerWidth <= 768
  useEffect(() => {
    isMobile = window.innerWidth <= 768
    setWidth(window.innerWidth)
  }, [window.innerWidth])
  console.log(`Width`, width)
  return (
    <div
      style={{
        width: "100%",
        maxWidth: isMobile ? 768 : null,
      }}
    >
      {children}
    </div>
  )
}

export { MobileView }
