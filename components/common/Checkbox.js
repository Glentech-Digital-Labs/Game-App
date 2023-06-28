import React from "react"
import "./index.css"
function Checkbox({ setIsChecked, isChecked }) {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <span className="checkbox-mark"></span>
    </label>
  )
}

export { Checkbox }
