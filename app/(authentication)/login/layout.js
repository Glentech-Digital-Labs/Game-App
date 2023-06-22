import Image from "next/image"

// import Logo from "../../public/images/Sportradar-log.svg"
import Logo from "/public/images/Sportradar-log.svg"

export const metadata = {
  title: "OTP ",
  description: "Making Gaming App",
}

function RootLayout({ children }) {
  return (
    <section>
      <div className="header tw-flex">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo of sports star"
          className="tw-relative tw-align-baseline tw-ml-4"
        />
      </div>
      {children}
    </section>
  )
}

export default RootLayout
