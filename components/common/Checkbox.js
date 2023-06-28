import React from "react"
import "./index.css"
function Checkbox({ setIsChecked, isChecked }) {
  function handledChange() {
    setIsChecked((prev) => !prev)
  }
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        // defaultChecked={isChecked}
        checked={isChecked}
        onChange={handledChange}
      />
      <span className="checkbox-mark"></span>
    </label>
  )
}

export { Checkbox }
