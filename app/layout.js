import { Loader } from "@components"
import { Providers } from "@redux/provider"
import "@styles/global.css"
import { NavigationEvents } from "@utils/navigationEvent"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Suspense } from "react"
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
  metric
}

function RootLayout({ children, session }) {
  return (
    <html className={`${inter.variable} ${sfFont.variable}`} lang={"en"}>
      <body>
        <Providers>{children}</Providers>
        <Suspense fallback={"Loader...."}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout
