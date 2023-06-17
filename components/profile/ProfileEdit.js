"use client"
import React, { useState } from "react"
import Image from "next/image"
import Kohali from "/public/images/Kohali.jpeg"
import { AiOutlineUser, AiFillLock } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { YellowButton } from "@components/common"

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
            // onBlur={handleSave}
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

function ProfileEdit() {
  return (
    <div className="tw-flex tw-flex-col">
      <div className="tw-w-36 tw-h-36 tw-rounded-full tw-mt-6 tw-relative tw-mx-auto">
        <Image src={Kohali} fill={true} className="tw-rounded-full   " />
      </div>

      <div className=" tw-mx-3">
        <ContentEditableInput
          Icon={AiOutlineUser}
          initialValue={"Rohit"}
          label={"First Name"}
          type={"text"}
        />
        <ContentEditableInput
          Icon={MdEmail}
          initialValue={"rohitkumar9133@gmail.com"}
          label={"Email"}
          type={"email"}
        />
        <ContentEditableInput
          Icon={BsFillTelephoneFill}
          initialValue={"9166186443"}
          label={"Phone"}
          type={"text"}
        />
        <ContentEditableInput
          Icon={AiFillLock}
          initialValue={"12134567"}
          label={"Password"}
          type={"password"}
        />
        {/* <InlineEditableElement type={"Password"} initialValue={"1234567"} /> */}
      </div>
      <YellowButton label={"Update"} style={"tw-mx-4"} />
    </div>
  )
}

export { ProfileEdit }
