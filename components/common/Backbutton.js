"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { AiOutlineLeft } from "/utils/Icons"

function BackButton({ label }) {
  const router = useRouter()
  return (
    <div>
      <div className=" tw-flex tw-items-center " onClick={() => router.back()}>
        <AiOutlineLeft fontSize={32} />
        <div className="tw-text-10px">{label}</div>
      </div>
    </div>
  )
}

export { BackButton }
