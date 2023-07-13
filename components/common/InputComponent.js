import React from "react"

function Input({
  type,
  placeholder,
  label,
  pattern,
  value,
  setValue,
  className,
  style,
  field,
  parentStyle,
  defaultValue,
}) {
  function userChangeHandler(event) {
    if (field) {
      setValue((prev) => ({
        ...prev,
        [field]: event.target.value,
      }))
    } else {
      setValue(() => event.target.value)
    }
  }

  return (
    <div className="tw-my-3 " style={parentStyle}>
      <label className="tw-font-medium tw-text-[14px]">{label}</label>
      <br />
      <input
        placeholder={placeholder}
        type={type}
        pattern={pattern}
        required={true}
        value={value}
        className={`${className} tw-py-2 tw-mt-2 tw-w-[90%] tw-min-w-[90%]`}
        onChange={userChangeHandler}
        style={style}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export { Input }
