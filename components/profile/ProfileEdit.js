import React from "react"
import Image from "next/image"
import Kohali from "/public/images/Kohali.jpeg"
import { AiOutlineUser, AiFillLock } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { YellowButton } from "@components/common"
import { ContentEditableInput } from "../common"

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
      </div>
      <YellowButton label={"Update"} className={"tw-mx-4"} />
    </div>
  )
}

export { ProfileEdit }
