import { useRouter } from "next/navigation"
import { useEffect } from "react"

const protectRouteWithCookie = (WrappedComponent) => {
  const ProtectedRoute = (props) => {
    const router = useRouter()

    useEffect(() => {
      const cookie = document.cookie
      const hasCookie = cookie.includes("sessionId")

      if (!hasCookie) {
        router.replace("/login")
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  return ProtectedRoute
}

export default protectRouteWithCookie
