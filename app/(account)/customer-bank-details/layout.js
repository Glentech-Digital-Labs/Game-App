import { BackButton } from "@components"
import { AiOutlineLeft } from "/utils/Icons"
export const metadata = {
  title: "Bank Details ",
  description: "Making Gaming App",
}

function RootLayout({ children }) {
  return (
    <section>
      <BackButton label={"Bank details"} />
      {children}
    </section>
  )
}

export default RootLayout
