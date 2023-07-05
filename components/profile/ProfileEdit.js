"use client"

// Here I was facing the issue of the change
// It is infinite rendering the issue
// There is some really big issue need to solve the issue

import React, { useState, useEffect, useMemo, use } from "react"
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

async function getUserData() {
  const response = await FetchData("user/profile")
  if (response.success) {
    return response.data
  }
  if (!response.success) {
    throw new Error("There is error in Fetching Profile")
  }
}
const dataFromPromise = getUserData()

// UPdating ApI is still Left

function ProfileEdit() {
  const userData = use(dataFromPromise)
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
      <YellowButton
        label={"Update"}
        className={"tw-mx-4"}
        onClick={getUserData}
      />
    </div>
  )
}

export { ProfileEdit }
