"use client"
import { useRouter } from "next/navigation"
import { AiOutlineLeft } from "/utils/Icons"
const metadata = {
  title: "OTP ",
  description: "Making Gaming App",
}

function RootLayout({ children }) {
  const router = useRouter()
  return (
    <section>
      <div
        className="header tw-flex tw-items-center"
        onClick={() => router.back()}
      >
        <AiOutlineLeft fontSize={32} />
        <span>Membership</span>
      </div>
      {children}
    </section>
  )
}

export default RootLayout
