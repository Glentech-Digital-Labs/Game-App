"use client"

import Image from "next/image"

import Logo from "../../public/images/Sportradar-log.svg"

import { HeaderProfile, Rounded, YellowButton } from "@components/common"
import { BiFootball, BiWallet, BiUser } from "/utils/Icons"
import { useEffect, useState } from "react"
import FetchData from "@utils/Fetcher"

function HeaderLayout() {
  const [sportsCategories, setSportsCategories] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await FetchData("sports/active-list")
      if (!!response?.ok) {
        throw new Error("Error in fetching Data")
      }
      if (response.success) {
        setSportsCategories(response.data)
      }
    }
    getData()
    return () => {
      getData()
    }
  }, [])

  return (
    <>
      <div className="header tw-flex tw-justify-between tw-w-screen tw-px-2">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo of sports star"
          className="tw-relative tw-align-baseline "
        />
        <HeaderProfile />
      </div>
      <div
        className="tw-flex tw-w-full tw-my-2 tw-overflow-x-auto tw-min-w-full all_sports_icon "
        style={{ maxWidth: "100vw" }}
      >
        {sportsCategories.map((sports) => {
          return (
            <Rounded
              key={sports.sportsId}
              Icon={BiFootball}
              label={sports.name}
              backgroundColor={""}
              sportsId={sports.sportsId}
            />
          )
        })}
      </div>
    </>
  )
}

export { HeaderLayout }
