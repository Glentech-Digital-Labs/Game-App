import React from "react"
import "./index.css"

function Nodata({ message }) {
  return (
    <div className="container_thumb_container">
      <div className="thumb-down"></div>
      {message && <div className="no-data">{message}</div>}
      <div className="no-data">No Match available </div>
    </div>
  )
}

export { Nodata }
