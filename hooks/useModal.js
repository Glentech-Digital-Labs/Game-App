"use client"
import { useState } from "react"

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return {
    isModalOpen,
    toggle,
  }
}

export { useModal }
