"use client"
import { useState } from "react"

function ContentEditableInput({ initialValue, className, Icon, label, type }) {
  const [value, setValue] = useState(initialValue)

  const handelChangeInput = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="tw-w-full tw-flex tw-bg-[#282B38] tw-my-4 tw-py-2  tw-rounded-lg ">
      <div
        className="tw-bg-slate-500 tw-border-2 tw-rounded-full tw-flex tw-justify-center tw-items-center tw-w-14 tw-h-14 tw-border-[#282B38] tw-mx-4"
        style={{ borderStyle: "outset" }}
      >
        <Icon fontSize={32} />
      </div>
      <div className="tw-flex tw-flex-col">
        <p>{label}</p>
        {type === "password" ? (
          <input
            type="password"
            value={value}
            onChange={handelChangeInput}
            autoFocus
            style={{
              minWidth: "100%",
              borderRadius: "0px",
              backgroundColor: "transparent",
            }}
          />
        ) : (
          <div
            contentEditable={true}
            onInput={handelChangeInput}
            type={type}
            suppressContentEditableWarning={true}
            className={`${className} tw-font-semibold tw-text-lg`}
            value
          >
            {value}
          </div>
        )}
      </div>
    </div>
  )
}

export { ContentEditableInput }
