import { BsPencil } from "/utils/Icons"
import { BackButton } from "@components"
function RootLayout({ children }) {
  return (
    <section>
      <div className="header tw-flex tw-justify-between tw-items-center tw-px-2">
        <BackButton label={"Profile"} />
        <BsPencil fontSize={20} className="tw-self-center" />
      </div>
      {children}
    </section>
  )
}

export default RootLayout
