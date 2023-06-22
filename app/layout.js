import "@styles/global.css"

import { Roboto } from "next/font/google"
import localFont from "next/font/local"
export const metadata = {
  title: "Playing App ",
  description: "Making Gaming App",
}
const myFont = localFont({
  src: "../public/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.woff",
  display: "swap",
  // weight: ["500", "700", "100"],
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700", "100"],
})

function RootLayout({ children }) {
  return (
    <html className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
