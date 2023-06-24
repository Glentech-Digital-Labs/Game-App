import "@styles/global.css"

import { Roboto, Inter } from "next/font/google"
import localFont from "next/font/local"
export const metadata = {
  title: "Playing App ",
  description: "Making Gaming App",
}
const sfFont = localFont({
  src: "../public/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.woff",
  display: "swap",
  // weight: ["500", "700", "100"],
  variable: "--sf-fonts",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--inter-font",
})
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700", "100"],
})

function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${sfFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
