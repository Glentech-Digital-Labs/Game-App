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
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import { NOTIFICATION_SETTING } from "utils/constants"
import protectRouteWithCookie from "@hooks/ProtectedRoute"

async function getUserData() {
  const response = await FetchData("user/profile")

  if (!!response.ok) {
    throw new Error("There is error in Fetching Profile")
  }
  if (response.success) {
    return response.data
  }
  if (!response.success) {
    throw new Error("There is error in Fetching Profile")
  }
}

// UPdating ApI is still Left

function Profile() {
  // const userData = use(dataFromPromise)
  const [userData, setUserData] = useState({})
  const router = useRouter()
  let arrayLength
  if (!!userData?.length) {
    arrayLength = Object.keys(userData)?.length
  }
  useEffect(() => {
    async function getData() {
      const response = await FetchData("user/profile")
      setUserData(response.data)
    }
    getData()
  }, [arrayLength])

  async function updateUser() {
    const response = await FetchData("user/profile/update", {
      method: "POST",
      body: {
        userName: userData.userName,
        fullName: userData.fullName,
        email: userData.email,
        countryCode: 91,
        phoneNumber: userData.phoneNumber,
      },
    })
    if (response.success) {
      toast.success("Updated successfully", {
        ...NOTIFICATION_SETTING,
      })
      router.push("/home")
    }
    if (!response.success) {
      toast.warn(`${response.message}`, {
        ...NOTIFICATION_SETTING,
      })
      router.push("/login")
    }
  }

  return (
    <>
      <ToastContainer />
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
            data={userData?.["userName"]}
          />
          <ContentEditableInput
            Icon={AiOutlineUser}
            initialValue={"userData.fullName"}
            label={"First Name"}
            type={"text"}
            data={userData?.["fullName"]}
          />
          <ContentEditableInput
            Icon={MdEmail}
            initialValue={userData?.email}
            label={"Email"}
            type={"email"}
            data={userData?.["email"]}
          />
          <ContentEditableInput
            Icon={BsFillTelephoneFill}
            initialValue={userData?.phoneNumber}
            label={"Phone"}
            type={"text"}
            data={userData?.["phoneNumber"]}
          />
        </div>
        <YellowButton
          label={"Update"}
          className={"tw-mx-4"}
          onClick={updateUser}
        />
      </div>
    </>
  )
}

let ProfileEdit = protectRouteWithCookie(Profile)
export { ProfileEdit }
