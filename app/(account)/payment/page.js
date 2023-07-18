import { Payment } from "@components"

function PaymentPage() {
  return (
    <div className="tw-mb-20">
      <Payment />
      {/* Sever component can be passed as children to client component */}
      {/* Data from server component to client component data need to be serializable */}
    </div>
  )
}

export default PaymentPage
