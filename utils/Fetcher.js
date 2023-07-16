import Data from "./config"

const BASE_URL = Data.BASE_URL

async function FetchData(path, options, queryParams) {
  let queryString = ""
  if (queryParams) {
    queryString = Object.keys(queryParams)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
      )
      .join("&")
  }

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
  const requestUrl = `${BASE_URL}/${path}?${queryString}`

  const res = await fetch(requestUrl, { ...modifiedOptions })

  // if (res.status == 401) {
  //   return res
  // }

  // if (!res.ok) {
  //   // throw new Error("Data Fetching me dikat hai ")
  //   return res
  // }
  if (!res.ok) {
    // throw new Error("Data Fetching me dikat hai ")
    return await res.json()
  }
  return res.json()
}

export default FetchData
