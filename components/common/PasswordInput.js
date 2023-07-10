"use client"
import React, { useState } from "react"

import { AiFillEyeInvisible, AiFillEye } from "/utils/Icons"

function PasswordInput({
  placeholder,
  className,
  label,
  value,
  setUserPassword,
  setShowPassword,
  showPassword = false,
  parentStyle,
  inputStyle,
}) {
  function passwordHandler(event) {
    setUserPassword(event.target.value)
  }
  const type = showPassword ? "text" : "password"

  function showPasswordHandler() {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="tw-my-3 " style={parentStyle}>
      <label className="tw-font-medium tw-text-[14px]">{label}</label>
      <br />
      <div className={`tw-flex  tw-relative ${className}  tw-items-center`}>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          required={true}
          className={` tw-py-2 tw-min-h-full tw-mt-2 tw-w-[90%] tw-border-2`}
          onChange={passwordHandler}
          style={inputStyle}
        />

        {type === "text" ? (
          <AiFillEye
            fontSize={32}
            className="tw-absolute tw-right-10 tw-my-2 "
            onClick={showPasswordHandler}
          />
        ) : (
          <AiFillEyeInvisible
            fontSize={32}
            className="tw-absolute tw-right-10 "
            onClick={showPasswordHandler}
          />
        )}
      </div>
    </div>
  )
}

export { PasswordInput }
