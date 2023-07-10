"use client"
import { AmountWithdraw } from "@components"
import protectRouteWithCookie from "@hooks/ProtectedRoute"
import React from "react"

function WithDraw() {
  return (
    <div>
      <AmountWithdraw />
    </div>
  )
}

export default protectRouteWithCookie(WithDraw)
