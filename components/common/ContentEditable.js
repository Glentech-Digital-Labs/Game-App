"use client"
import { useState } from "react"

function ContentEditableInput({ initialValue, className, Icon, label, type }) {
  const [value, setValue] = useState(initialValue)

  const handelChangeInput = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="tw-w-full tw-flex tw-bg-[#212128] tw-my-4 tw-py-2  tw-rounded-lg tw-border-2 tw-border-[#282B38] tw-h-16">
      <div
        className="tw-bg-[#3B3B42] tw-border-2 tw-rounded-full tw-flex tw-justify-center tw-items-center tw-w-10 tw-h-10 tw-border-[#3B3B42] tw-mx-4"
        style={{ borderStyle: "outset" }}
      >
        <Icon fontSize={24} />
      </div>
      <div className="tw-flex tw-flex-col">
        <p className="tw-text-14px tw-font-medium">{label}</p>
        {type === "password" ? (
          <input
            type="password"
            value={value}
            className="tw-border-none "
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
            className={`${className} tw-font-semibold  tw-outline-none tw-text-[18px]`}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  )
}

export { ContentEditableInput }
