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
      // headers: { Cookie: cookies().toString() }
      "Content-Type": "application/json; ",
    },
    ...(options?.method ? { body: JSON.stringify(options?.body) } : ""),
  }

  const res = await fetch(`${BASE_URL}/${path}`, { ...modifiedOptions })

  // if (!res.ok) {
  // }
  return res.json()
}

export default FetchData
