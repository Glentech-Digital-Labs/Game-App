"use client"
import React, { Profiler, useEffect, useState } from "react"
import "./index.css"
import { YellowButton } from "@components/common"
import { useModal } from "@hooks"
import { Modal } from "@components/modal/Modal"
import { PriceImages, SocialMedia, ReferredPeople } from "./ReferralList"
import { useSelector } from "react-redux"

function ReferralComponent() {
  const { isModalOpen, toggle } = useModal()
  const { referralCode } = useSelector((state) => state.userContext)
  const [copiedValue, setCopiedValue] = useState("")
  async function copyToClipBoard(text) {
    await navigator.clipboard.writeText(text)
    setCopiedValue(text)
  }

  return (
    <Profiler id="App">
      <div className="tw-relative tw-min-w-full tw-h-[80vh] referral-main ">
        <PriceImages />
        <div className="tw-absolute  tw-mt-44 tw-flex tw-flex-col tw-justify-center tw-mx-4 ">
          <p className="tw-mx-auto tw-text-goldenColor tw-text-xl tw-font-bold">
            Refer and Earn !{" "}
          </p>
          <p className="tw-my-4 tw-mx-4">
            Keep your friends close and referral friends closer! Invite your
            friends and family to sign up using your personal referral code
            (mentioned below) and get 2% of each and every one of their sports
            trading made thereafter!
          </p>
          <div className="tw-flex tw-border-2 tw-rounded-xl tw-border-gray-700 tw-justify-between tw-items-center">
            <div className="tw-border-r-2 tw-px-4">Referral Code</div>
            <p className="tw-font-semibold tw-text-lg">{referralCode}</p>
            <button
              className="tw-bg-white tw-text-black tw-p-2 tw-rounded-xl tw-mx-2 tw-my-2"
              onClick={() => {
                copyToClipBoard(referralCode)
              }}
            >
              Copy
            </button>
          </div>
          <div className="tw-flex tw-border-2 tw-rounded-xl tw-border-gray-700 tw-justify-between tw-items-center tw-my-4">
            <div className="tw-border-r-2 tw-px-4">Referral Link</div>
            <p className="tw-font-semibold tw-text-lg">{`registration/${referralCode}`}</p>
            <button
              className="tw-bg-white tw-text-black tw-p-2 tw-rounded-xl tw-mx-2 tw-my-2"
              onClick={() => {
                copyToClipBoard(`registration/${referralCode}`)
              }}
            >
              Copy
            </button>
          </div>
          <YellowButton
            label={"my Referral"}
            className={"tw-w-[90%] tw-mx-4"}
            onClick={toggle}
          />
          <SocialMedia />
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} toggle={toggle}>
        <ReferredPeople />
      </Modal>
    </Profiler>
  )
}
const Referral = React.memo(ReferralComponent)
export { Referral }
