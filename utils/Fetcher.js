import Data from "./config"
// import { useSelector, useDispatch } from "react-redux"
// import { resetError, setError } from "../redux/feature/error/errorSlice"

const BASE_URL = Data.BASE_URL

async function FetchData(path, options) {
  const modifiedOptions = {
    method: options?.method ? options.method : "GET",
    ...options,
    headers: {
      ...options?.headers,
      //   Authorization: "Bearer YourAccessToken",
      "Content-Type": "application/json; charset=UTF-8",
    },
    ...(options?.method ? { body: JSON.stringify(options?.body) } : ""),
  }
  console.log("Modified option", modifiedOptions)

  const res = await fetch(`${BASE_URL}/${path}`, modifiedOptions)

  // if (!res.ok) {
  // }
  return res.json()
}

export default FetchData
