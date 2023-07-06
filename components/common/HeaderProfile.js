"use client"
import React from "react"
import { BiUser, BiWallet } from "/utils/Icons"
import { useSelector } from "react-redux"
import { YellowButton } from "./YellowButton"

function HeaderProfile() {
  const userData = useSelector((state) => state.userContext)
  return (
    <div className="tw-flex  tw-justify-between">
      <div className="tw-flex tw-ml-4">
        <BiWallet className="tw-self-center" fontSize={30} />
        <span className="tw-self-center">
          &#8377;{userData?.depositBalance || 0}
        </span>
      </div>
      <div className="tw-flex tw-align-middle tw-mx-4">
        <BiUser className="tw-self-center" fontSize={30} />
        <span className="tw-self-center">{userData.userName}</span>
      </div>

      <YellowButton
        label={"+ Add"}
        className="tw-px-2 tw-mx-2 tw-self-center"
        style={{ height: "2rem", width: "4rem" }}
      />
    </div>
  )
}

export { HeaderProfile }