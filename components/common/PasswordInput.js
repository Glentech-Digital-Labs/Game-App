"use client"
import React, { useState } from "react"

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

function PasswordInput({
  placeholder,
  className,
  label,
  value,
  setUserPassword,
  setShowPassword,
  showPassword = false,
}) {
  function passwordHandler(event) {
    setUserPassword(event.target.value)
  }
  const type = showPassword ? "text" : "password"

  function showPasswordHandler() {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="tw-mt-6 tw-mb-3 ">
      <label className="">{label}</label>
      <br />
      <div className={`tw-flex  tw-relative ${className}  tw-items-center`}>
        <input
          placeholder={placeholder}
          type={type}
          pattern="^(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$"
          value={value}
          className={` tw-py-2 tw-min-h-full tw-mt-2 tw-w-[90%]`}
          onChange={passwordHandler}
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
      {/* Here have to put the Eye icon to make the password hide and show */}
    </div>
  )
}

export { PasswordInput }
