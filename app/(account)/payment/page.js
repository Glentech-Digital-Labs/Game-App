import Image from "next/image"
import React from "react"
import QR_Image from "/public/images/QR_code.png"
import { AmountCard } from "@components"
import CurrencyData from "/utils/currency.json"
import { AiFillPlusCircle } from "react-icons/ai"
import Bank_Image from "/public/images/Bank_Image.svg"
import UPI_IMAGE from "/public/images/UPI_Image.svg"
import { MdOutlineContentCopy } from "react-icons/md"
import { BlackButton, YellowButton } from "@components/common"

function Payment() {
  return (
    <>
      <div className="tw-flex tw-bg-[#171717] tw-justify-center tw-my-4 ">
        <Image src={Bank_Image} height={84} />
        <Image src={UPI_IMAGE} height={84} className="tw-ml-4" />
      </div>
      <div className="match_card tw-flex  tw-flex-col tw-justify-center tw-items-center tw-py-2 tw-mx-2">
        <Image alt="Payment QR" height={180} src={QR_Image} />
        <p className="tw-flex tw-my-2 tw-items-center">
          johan@upi <MdOutlineContentCopy fontSize={24} className="tw-ml-2 " />
        </p>
      </div>
      <div className="tw-flex tw-overflow-x-auto tw-my-4 remove-scroll-bar">
        <AmountCard className={"yellowButton tw-px-6"} amount={1000} />
        <AmountCard className={"blackButton tw-px-6"} amount={2000} />
        <AmountCard className={"blackButton tw-px-6"} amount={3000} />
        <AmountCard className={"blackButton tw-px-6"} amount={4000} />
        <AmountCard className={"blackButton tw-px-6"} amount={5000} />
        <AmountCard className={"blackButton tw-px-6"} amount={6000} />
      </div>

      <div className="tw-bg-[#212128]  tw-pl-2 tw-py-3 tw-px-4 tw-mx-2 tw-rounded-lg tw-h-14 tw-my-4 tw-flex tw-items-center ">
        {CurrencyData["USD"]["symbol"]} 100
      </div>
      <div className="tw-bg-[#212128]  tw-pl-2 tw-py-3 tw-px-4 tw-mx-2 tw-rounded-lg tw-h-14 tw-flex tw-items-center">
        UTR Transition Number
      </div>

      <div className="tw-bg-[#212128] tw-border-2 tw-border-black tw-my-2 tw-flex tw-justify-center tw-items-center tw-relative tw-w-32 tw-h-32 tw-flex-col tw-ml-3">
        <input
          type="file"
          className=" tw-z-10 tw-absolute tw-opacity-0 tw-w-full tw-h-full"
        />
        <AiFillPlusCircle fontSize={32} className=" " />
        <p className="tw-text-center tw-mt-2">Payment proof screenshot </p>
      </div>
      <div className="tw-flex tw-fixed tw-bottom-4 tw-w-full">
        <YellowButton label={"Submit"} className={"tw-w-[48%]"} />
        <BlackButton label={"Cancel"} className={"tw-w-[48%] tw-ml-4"} />
      </div>
    </>
  )
}

export default Payment
