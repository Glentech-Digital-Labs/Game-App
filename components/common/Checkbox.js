import React from "react"
import "./index.css"
function Checkbox() {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" />
      <span className="checkbox-mark"></span>
    </label>
  )
}

export { Checkbox }
