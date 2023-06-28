"use client"
import { useState } from "react"

function useToast() {
  const [isToastOpen, setIsToastOpen] = useState(false)

  const tostToggle = () => {
    setIsToastOpen(!isToastOpen)
  }

  return {
    isToastOpen,
    tostToggle,
  }
}

export { useToast }
