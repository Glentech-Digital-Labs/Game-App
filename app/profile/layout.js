import { AiOutlineLeft } from "/utils/Icons"
import { BsPencil } from "/utils/Icons"
function RootLayout({ children }) {
  return (
    <section>
      <div className="header tw-flex tw-justify-between tw-items-center tw-px-2">
        <div className="tw-flex tw-self-center tw-items-center ">
          <AiOutlineLeft fontSize={20} className="tw-self-center" />
          <div className="tw-text-10px">Profile</div>
        </div>
        <BsPencil fontSize={20} className="tw-self-center" />
      </div>
      {children}
    </section>
  )
}

export default RootLayout
