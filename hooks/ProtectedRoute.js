import { setUser } from "@redux/feature/user/userSlice"
import FetchData from "@utils/Fetcher"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

function delete_cookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}

const protectRouteWithCookie = (WrappedComponent) => {
  const ProtectedRoute = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
      let cookie = document.cookie
      let hasCookie = cookie.includes("sessionId")

      if (!hasCookie) {
        router.replace("/login")
      }
      const interval = setInterval(() => {
        async function isLogged() {
          const response = await FetchData("punter/check/session")
          if (!response.success) {
            delete_cookie("sessionId")
            dispatch(setUser())

            router.push("/login")
          }
          if (!!response.ok) {
            delete_cookie("sessionId")
            dispatch(setUser())
            router.push("/login")
          }
        }

        isLogged()
      }, 1000 * 10)

      return () => {
        clearInterval(interval)
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  return ProtectedRoute
}

export default protectRouteWithCookie
