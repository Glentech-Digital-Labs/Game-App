import { Providers } from "@redux/provider"
import "@styles/global.css"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
export const metadata = {
  title: "Playing App ",
  description: "Making Gaming App",
}
const sfFont = localFont({
  src: "../public/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.woff",
  display: "swap",
  variable: "--sf-fonts",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--inter-font",
})

export function reportWebVitals(metric) {
  console.log(metric)
}

function RootLayout({ children, session }) {
  return (
    <html className={`${inter.variable} ${sfFont.variable}`}>
      <body>
        {/* <SessionProvider session={session}> */}
        <Providers>{children}</Providers>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}

export default RootLayout
