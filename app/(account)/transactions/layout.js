import { AiOutlineLeft } from "/utils/Icons"
export const metadata = {
  title: "OTP ",
  description: "Making Gaming App",
}

function RootLayout({ children }) {
  return (
    <section>
      <div className="header tw-flex tw-items-center tw-mb-3 ">
        <AiOutlineLeft fontSize={32} />
      </div>
      {children}
    </section>
  )
}

export default RootLayout
