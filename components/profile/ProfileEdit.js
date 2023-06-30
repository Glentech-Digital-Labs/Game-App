"use client"
import React, { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Kohali from "/public/images/Kohali.jpeg"

import { YellowButton } from "@components/common"
import { ContentEditableInput } from "../common"
import {
  AiOutlineUser,
  MdEmail,
  BsFillTelephoneFill,
  AiFillLock,
} from "/utils/Icons"
import FetchData from "@utils/Fetcher"

async function ProfileEdit() {
  const [userData, setUserData] = useState([])
  async function getUserData() {
    const response = await FetchData("user/profile")
    if (response.success) {
      setUserData(response.data)
    }
  }
  useEffect(() => {
    getUserData()
    return () => {
      getUserData()
    }
  }, [])

  return (
    <div className="tw-flex tw-flex-col">
      <div className="tw-w-36 tw-h-36 tw-rounded-full tw-mt-6 tw-relative tw-mx-auto">
        <Image
          src={Kohali}
          fill={true}
          className="tw-rounded-full "
          alt="Image of Profile"
        />
      </div>

      <div className=" tw-mx-3">
        <ContentEditableInput
          Icon={AiOutlineUser}
          initialValue={userData?.userName}
          label={"Username"}
          type={"text"}
        />
        <ContentEditableInput
          Icon={AiOutlineUser}
          initialValue={userData?.fullName}
          label={"First Name"}
          type={"text"}
        />
        <ContentEditableInput
          Icon={MdEmail}
          initialValue={userData?.email}
          label={"Email"}
          type={"email"}
        />
        <ContentEditableInput
          Icon={BsFillTelephoneFill}
          initialValue={userData?.phoneNumber}
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
