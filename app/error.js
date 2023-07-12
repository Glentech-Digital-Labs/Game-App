"use client" // Error components must be Client Components

import { ErrorComponent } from "@components"
import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <ErrorComponent tryAgain={() => reset()} />
    </div>
  )
}
