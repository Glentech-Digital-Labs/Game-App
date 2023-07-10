"use client"
import { Transaction } from "@components"
import protectRouteWithCookie from "@hooks/ProtectedRoute"
import React from "react"

function TransactionsDetails() {
  return (
    <div>
      <Transaction />
    </div>
  )
}

export default protectRouteWithCookie(TransactionsDetails)
