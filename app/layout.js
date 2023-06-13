import "@styles/global.css"

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
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
