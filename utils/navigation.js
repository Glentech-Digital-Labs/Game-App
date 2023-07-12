"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [])
  return ref.current
}

export const useNavigation = ({ on }) => {
  const pathname = usePathname()
  const prevPathname = usePrevious(pathname)

  const searchParams = useSearchParams()
  const prevSearchParams = usePrevious(searchParams)

  const { routeChanged } = on || {}
  const [route, setRoute] = useState({ pathname, searchParams })

  useEffect(() => {
    if (
      searchParams?.toString() !== prevSearchParams?.toString() ||
      pathname !== prevPathname
    ) {
      setRoute({ pathname, searchParams })
      routeChanged?.({ pathname, searchParams })
    }
  }, [pathname, prevPathname, prevSearchParams, routeChanged, searchParams])

  return { route }
}
