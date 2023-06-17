import { AiOutlineLeft } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
function RootLayout({ children }) {
  return (
    <section>
      <div className="header tw-flex tw-justify-between tw-items-center tw-px-2">
        <div className="tw-flex tw-self-center tw-items-center ">
          <AiOutlineLeft fontSize={32} className="tw-self-center" />
          <div>Profile</div>
        </div>
        <BsPencil fontSize={32} className="tw-self-center" />
      </div>
      {children}
    </section>
  )
}

export default RootLayout
