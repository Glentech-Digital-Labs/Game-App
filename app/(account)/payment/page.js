"use client"
import { Payment } from "@components"
import protectRouteWithCookie from "@hooks/ProtectedRoute"

function PaymentPage() {
  return (
    <>
      <Payment />
      {/* Sever component can be passed as children to client component */}
      {/* Data from server component to client component data need to be serializable */}
    </>
  )
}

export default protectRouteWithCookie(PaymentPage)
