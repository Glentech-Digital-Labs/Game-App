import "@styles/global.css"
import React from "react"

function Input({ type, placeholder, label, pattern, value, setValue }) {
  function userChangeHandler(event) {
    event.preventDefault()
    setValue(() => event.target.value)
  }

  return (
    <div className="tw-my-3 ">
      <label className="">{label}</label>
      <br />
      <input
        placeholder={placeholder}
        type={type}
        pattern={pattern}
        value={value}
        className="tw-border-white tw-py-2 tw-mt-2 tw-w-[90%] tw-min-w-[90%]"
        onChange={userChangeHandler}
      />
    </div>
  )
}

export { Input }
