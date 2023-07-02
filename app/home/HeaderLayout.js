"use client"

import Image from "next/image"

import Logo from "../../public/images/Sportradar-log.svg"

import { Rounded, YellowButton } from "@components/common"
import { BiFootball, BiWallet, BiUser } from "/utils/Icons"
import { useEffect, useState } from "react"
import FetchData from "@utils/Fetcher"

function HeaderLayout() {
  const [sportsCategories, setSportsCategories] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await FetchData("sports/active-list")
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
      <div className="header tw-flex tw-justify-between">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo of sports star"
          className="tw-relative tw-align-baseline tw-ml-4"
        />
        <div className="tw-flex  tw-justify-between">
          <div className="tw-flex tw-ml-4">
            <BiWallet className="tw-self-center" fontSize={30} />
            <span className="tw-self-center">$ 100</span>
          </div>
          <div className="tw-flex tw-align-middle tw-mx-4">
            <BiUser className="tw-self-center" fontSize={30} />
            <span className="tw-self-center">Rohit</span>
          </div>

          <YellowButton
            label={"+ Add"}
            className="tw-px-2 tw-mx-2 tw-self-center"
            style={{ height: "2rem", width: "4rem" }}
          />
        </div>
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
