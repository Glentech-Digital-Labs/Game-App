"use client"
import Gift from "../../public/images/GIft-Box.png"
import Blessing from "../../public/images/Ashirwad.png"
import CoinOne from "../../public/images/Coin-Image-1.png"
import CoinTwo from "../../public/images/Coin-image-2.png"
import CoinWIthDollar from "../../public/images/Coin-with-doller.png"
import VerticalCoin from "../../public/images/VerticalConit.png"
import CoinThree from "../../public/images/Coin3.png"
import Cash from "../../public/images/Cash-icons.png"
import Instagram from "../../public/images/Instagram.svg"
import { BsFacebook, BsTelegram } from "/utils/Icons"
import { AiFillTwitterCircle } from "/utils/Icons"
import { IoLogoWhatsapp } from "/utils/Icons"
import Image from "next/image"
import FetchData from "@utils/Fetcher"
import { useEffect, useState } from "react"

function ReferredPeople() {
  const [referredData, setReferredData] = useState([])
  useEffect(() => {
    async function getReferred(params) {
      const response = await FetchData("user/referrals", {
        next: { revalidate: 60 },
      })
      setReferredData(response.data)
    }
    getReferred()
  }, [])

  if (referredData.length == 0) {
    return (
      <div className="tw-flex tw-justify-center tw-items-center  ">
        <div className=" tw-self-center tw-my-40">No Referred people</div>
      </div>
    )
  }

  return (
    <>
      <div className="tw-grid tw-grid-cols-10 tw-bg-[#36364A] tw-h-14 tw-justify-items-center tw-items-center  tw-mb-4 tw-rounded-t-xl">
        <div className="tw-col-span-4">UserName</div>
        <div className="tw-col-span-3">Joining Date</div>
        <div className="tw-col-span-3">Earning</div>
      </div>
      {referredData.map((user, index) => {
        return (
          <div className="tw-bg-[#252530] ">
            <div className="tw-grid tw-grid-cols-10  tw-justify-items-center tw-items-center tw-mb-2 tw-h-8">
              <div className="tw-col-span-4">{user.name}</div>
              <div className="tw-col-span-3">23/4/2045</div>
              <div className="tw-col-span-3">23/4/2045</div>
            </div>
          </div>
        )
      })}
      {/* <div className="tw-bg-[#252530] ">
        <div className="tw-grid tw-grid-cols-10  tw-justify-items-center tw-items-center tw-mb-2 tw-h-8">
          <div className="tw-col-span-4">Gingal singh</div>
          <div className="tw-col-span-3">23/4/2045</div>
          <div className="tw-col-span-3">23/4/2045</div>
        </div>
        <div className="tw-grid tw-grid-cols-10  tw-justify-items-center tw-items-center tw-mb-2 tw-h-8">
          <div className="tw-col-span-4">Gingal singh</div>
          <div className="tw-col-span-3">23/4/2045</div>
          <div className="tw-col-span-3">23/4/2045</div>
        </div>
        <div className="tw-grid tw-grid-cols-10  tw-justify-items-center tw-items-center tw-mb-2 tw-h-8">
          <div className="tw-col-span-4">Gingal singh</div>
          <div className="tw-col-span-3">23/4/2045</div>
          <div className="tw-col-span-3">23/4/2045</div>
        </div>
      </div> */}
    </>
  )
}

function PriceImages() {
  return (
    <>
      <Image src={Blessing} className="tw-absolute  " alt="Prakash" />
      <Image src={Gift} alt="Gift" className="tw-absolute tw-ml-24" />
      <Image src={Cash} alt="cash" className="  tw-absolute tw-mt-8" />
      <Image
        src={CoinThree}
        alt="cash2"
        className=" tw-mt-20 tw-ml-10  tw-absolute"
      />
      <Image
        src={CoinTwo}
        alt="cash2"
        className=" tw-mt-[34%] tw-ml-[28%] tw-absolute"
      />

      <Image
        src={CoinOne}
        alt="cash2"
        className="tw-mt-8 tw-ml-72  tw-absolute"
      />
      <Image
        src={VerticalCoin}
        alt="cash2"
        className=" tw-ml-64 tw-mt-[34%] tw-absolute   tw-scale-[100%] tw-rotate-180"
      />
    </>
  )
}

function SocialMedia() {
  return (
    <>
      <div className="tw-flex tw-w-full tw-justify-around tw-mt-4 social-media tw-py-4  tw-rounded-xl ">
        <BsFacebook fontSize={42} color="#3A559F" />
        <AiFillTwitterCircle fontSize={42} color="#03A9F4" />
        <Image src={Instagram} alt="Instagram Logo" />
        <IoLogoWhatsapp fontSize={42} color="#29A71A" />
        <BsTelegram fontSize={42} color="#2AABEE" />
      </div>
    </>
  )
}

export { ReferredPeople, PriceImages, SocialMedia }
