"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

function useNavigationEvent(sendSomewhere) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    const url = pathname + searchParams.toString()
    sendSomewhere(url)
  }, [pathname, searchParams])
}

export default useNavigationEvent
