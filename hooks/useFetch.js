import { useState, useEffect } from "react"

const useFetch = (url, options) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const modifiedOptions = {
    method: options.method || "GET",
    ...options,
    headers: {
      ...options.headers,
      //   Authorization: "Bearer YourAccessToken",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(options.body),
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(url, modifiedOptions)
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        setData(data)
        setError(null)
      } catch (error) {
        setError(error.message)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export { useFetch }
