"use client"
import React, { useState } from "react"

function PasswordInput({
  placeholder,
  label,
  value,
  setUserPassword,
  setShowPassword,
  showPassword,
}) {
  function passwordHandler(event) {
    setUserPassword(event.target.value)
  }
  const type = showPassword ? "password" : "text"

  function showPasswordHandler() {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="tw-my-3 ">
      <label className="">{label}</label>
      <br />
      <input
        placeholder={placeholder}
        type={type}
        pattern="^(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$"
        value={value}
        className="tw-border-white tw-py-2 tw-mt-2 tw-w-[90%]"
        onChange={passwordHandler}
      />
      {/* Here have to put the Eye icon to make the password hide and show */}
    </div>
  )
}

export { PasswordInput }
