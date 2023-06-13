import React, { useMemo } from "react"
import { RE_DIGIT } from "../../utils/constants"

// Used this article for making the item
// https://dominicarrojado.com/posts/how-to-create-your-own-otp-input-in-react-and-typescript-with-tests-part-1/
function OtpInput({ value, valueLength, onChange }) {
  const valueItems = useMemo(() => {
    const valueArray = value.split("")
    const items = []

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i]

      if (RE_DIGIT.test(char)) {
        items.push(char)
      } else {
        items.push("")
      }
    }

    return items
  }, [value, valueLength])

  const focusToNextInput = (target) => {
    const nextElementSibling = target.nextElementSibling

    if (nextElementSibling) {
      nextElementSibling.focus()
    }
  }
  const focusToPrevInput = (target) => {
    const previousElementSibling = target.previousElementSibling

    if (previousElementSibling) {
      previousElementSibling.focus()
    }
  }

  const inputOnChange = (e, idx) => {
    const target = e.target
    let targetValue = target.value
    const isTargetValueDigit = RE_DIGIT.test(targetValue)
    const targetValueLength = targetValue.length

    if (!isTargetValueDigit && targetValue !== "") {
      return
    }

    targetValue = isTargetValueDigit ? targetValue : " "

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1)

    onChange(newValue)

    if (!isTargetValueDigit) {
      return
    }

    const nextElementSibling = target.nextElementSibling
    const nextInputEl = target.nextElementSibling

    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
      return
    }

    if (nextElementSibling) {
      nextElementSibling.focus()
    } else if (targetValueLength === valueLength) {
      onChange(targetValue)
      target.blur()
    }
  }

  const inputOnKeyDown = (e) => {
    const target = e.target
    const targetValue = target.value

    if (e.key !== "Backspace" || target.value !== "") {
      return
    }

    const previousElementSibling = target.previousElementSibling
    if (previousElementSibling) {
      previousElementSibling.focus()
    }
    target.setSelectionRange(0, targetValue.length)
  }

  const inputOnFocus = (e) => {
    const { target } = e
    const prevInputEl = target.previousElementSibling

    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus()
    }

    target.setSelectionRange(0, target.value.length)
  }

  return (
    <div className="otp-group">
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className="otp-input"
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
        />
      ))}
    </div>
  )
}

export { OtpInput }
