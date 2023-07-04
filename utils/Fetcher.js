import Data from "./config"

// import { cookies } from "next/headers"
const BASE_URL = Data.BASE_URL

async function FetchData(path, options) {
  const modifiedOptions = {
    method: options?.method ? options.method : "GET",
    credentials: "include",
    ...options,
    headers: {
      ...options?.headers,
      "ngrok-skip-browser-warning": "69420",
      "Content-Type": "application/json",
    },
    body:
      options?.method === "POST" || options?.method === "PUT"
        ? JSON.stringify(options?.body)
        : undefined,
  }

  const res = await fetch(`${BASE_URL}/${path}`, { ...modifiedOptions })

  // if (!res.ok) {
  // }
  return res.json()
}

export default FetchData
