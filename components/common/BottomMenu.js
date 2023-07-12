"use client"
import React, { useState } from "react"
import {
  GoHome,
  AiFillPlaySquare,
  BiMenu,
  BsPlayBtn,
  BiLogOut,
} from "/utils/Icons"
import { useRouter } from "next/navigation"
import Link from "next/link"
import FetchData from "@utils/Fetcher"
import { Loader } from "./Loader"
import { useDispatch } from "react-redux"
import { resetUser } from "/redux/feature/user/userSlice"
import { Modal } from "@components/modal/Modal"
import { OpenBets } from "./OpenBets"
import { useModal } from "@hooks"
async function getBetsData({ setIsLoading }) {
  setIsLoading(true)
  const resp = await FetchData("betting/user/bets")
  if (!!resp.ok) {
    setIsLoading(false)
    throw new Error("There is error in Fetching The Bets")
  }
  if (resp.success) {
    setIsLoading(false)
    return resp.data
  }
  if (!resp.success) {
    setIsLoading(false)
    throw new Error("There is error in Fetching The Bets")
  }
}

function BottomMenu() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { isModalOpen, toggle } = useModal()
  const [betsData, setBetsData] = useState("")
  async function loginOut() {
    setIsLoading(true)
    const response = await FetchData("punter/logout")
    if (!!response.ok) {
      setIsLoading(false)
    }
    if (response.success) {
      setIsLoading(false)
      dispatch(resetUser())
      // router.push("/login")
    }
    if (!response.success) {
      setIsLoading(false)
    }
  }

  async function betHandler() {
    const response = await getBetsData({ setIsLoading })
    let transformedArray = []
    let checkingArray = []
    response?.map((item, index) => {
      if (!checkingArray.includes(item.id)) {
        transformedArray.push(item)
        checkingArray.push(item.id)
      }
    })
    setBetsData(transformedArray)
    toggle()
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className=" tw-flex tw-h-20  tw-justify-around tw-fixed tw-min-w-full  tw-bottom-0 tw-z-10  tw-text-gray-300 bottom_layout">
        <div
          className="tw-flex tw-flex-col tw-justify-center"
          onClick={() => router.push("/home")}
        >
          <GoHome fontSize={24} className="tw-mx-auto" color="#5D5D66" />
          <p>Home</p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center">
          <Link href={"/home/inplay"}>
            <AiFillPlaySquare
              fontSize={24}
              className="tw-mx-auto"
              color="#5D5D66"
            />
            <p>In Play</p>
          </Link>
        </div>

        <div
          className="tw-flex tw-flex-col tw-justify-center"
          onClick={betHandler}
        >
          <BsPlayBtn fontSize={24} className="tw-mx-auto" color="#5D5D66" />
          <p>Open Bet</p>
        </div>
        <Link
          className="tw-flex tw-flex-col tw-justify-center"
          href={`/navigate-menu`}
        >
          <BiMenu fontSize={24} className="tw-mx-auto" color="#5D5D66" />
          <p>Menu</p>
        </Link>
        <div
          className="tw-flex tw-flex-col tw-justify-center"
          onClick={() => loginOut()}
        >
          <BiLogOut fontSize={24} className="tw-mx-auto" color="#5D5D66" />
          <p>Logout</p>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} toggle={toggle}>
        <OpenBets betData={betsData} />
      </Modal>
    </>
  )
}

export { BottomMenu }
