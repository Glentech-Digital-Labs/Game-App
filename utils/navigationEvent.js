"use client"
import { useEffect, useRef, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { usePrevious } from "./navigation"

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const oldUrl = `${pathname}?${searchParams}`
  const previousUrl = usePrevious(oldUrl)

  useEffect(() => {
    const newUrl = `${pathname}?${searchParams}`

    if (newUrl !== previousUrl) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [pathname, searchParams, isLoading])

  return null
}
