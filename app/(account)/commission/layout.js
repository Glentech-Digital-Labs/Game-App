import { BackButton } from "@components"
const metadata = {
  title: "Account statement ",
  description: "Making Gaming App",
}

function RootLayout({ children }) {
  return (
    <section>
      <BackButton label={"Commission"} />
      {children}
    </section>
  )
}

export default RootLayout
