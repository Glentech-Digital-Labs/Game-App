"use client"
import { Commission } from "@components"
import protectRouteWithCookie from "@hooks/ProtectedRoute"
import React from "react"

function CommissionPage() {
  return (
    <div>
      <Commission />
    </div>
  )
}

export default protectRouteWithCookie(CommissionPage)
