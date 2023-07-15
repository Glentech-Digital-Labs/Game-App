"use client"
import { Payment } from "@components"
import protectRouteWithCookie from "@hooks/ProtectedRoute"

function PaymentPage() {
  return (
    <div className="tw-mb-20">
      <Payment />
      {/* Sever component can be passed as children to client component */}
      {/* Data from server component to client component data need to be serializable */}
    </div>
  )
}

export default protectRouteWithCookie(PaymentPage)
