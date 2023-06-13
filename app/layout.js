import "@styles/global.css"
import Image from "next/image"
import BackgroundImage from "../public/images/background-icons.png"
import Logo from "../public/images/Sportradar-log.svg"
import { Roboto } from "next/font/google"

export const metadata = {
  title: "Playing App ",
  description: "Making Gaming App",
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700", "100"],
})

function RootLayout({ children }) {
  return (
    <html className={roboto.className}>
      <head className="tw-bg-black"></head>
      <body>
        <div className="header tw-flex">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="Logo of sports star"
            className="tw-relative tw-align-baseline tw-ml-4"
          />
        </div>
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src={BackgroundImage}
            fill={true}
            alt="BackgroundImage"
            style={{ backgroundRepeat: "repeat-x" }}
          />
        </div>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
