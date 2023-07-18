"use client"
import React, { useState } from "react"
import "./index.css" // Styles for the component

const MultipleSelect = ({
  options,
  label,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-justify-center ">
        <label className="tw-font-medium tw-text-[14px] tw-mb-0">{label}</label>
        <div className="multiple-select">
          <select
            className="options-dropdown tw-h-12 tw-rounded-xl tw-px-2 tw-border-2  tw-border-gray-600 tw-outline-none"
            onChange={(e) => setSelectedOptions(e.target.value)}
          >
            <option value="">Select an option</option>
            {options?.map((option) => {
              if (typeof option === "object") {
                let entries = Object.entries(option)[0]
                return (
                  <option key={entries[0]} value={entries[0]}>
                    {entries[1]}
                  </option>
                )
              } else {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )
              }
            })}
          </select>
        </div>
      </div>
    </>
  )
}

export { MultipleSelect }
