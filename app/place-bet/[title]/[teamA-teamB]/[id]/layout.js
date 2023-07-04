"use client"
import React, { useEffect, useMemo, useState } from "react"
import "./index.css"
import { AiOutlineLeft } from "/utils/Icons"
import { CiReceipt } from "/utils/Icons"

import { BottomMenu, Modal, OpenBets } from "@components"
import { useModal } from "@hooks"
import FetchData from "@utils/Fetcher"
import { useDispatch, useSelector } from "react-redux"
import { setPlacedBetData } from "/redux/feature/sports/sportsSlice"
import { useRouter, useParams } from "next/navigation"

function Headers({ toggle, competition, team }) {
  const router = useRouter()
  return (
    <div className="tw-flex tw-justify-between tw-px-2 header ">
      <div className="tw-flex tw-self-center">
        <AiOutlineLeft
          fontSize={20}
          className="tw-self-center tw-cursor-pointer"
          onClick={() => router.back()}
        />
        <div>
          <p className="tw-font-medium tw-text-[10px]">{competition}</p>
          <h2 className="tw-font-semibold tw-text-[14px] ">
            {`${team[0]} vs ${team[1]}`}
          </h2>
        </div>
      </div>
      <div className="tw-flex ">
        <div className="tw-flex tw-justify-center" onClick={toggle}>
          <CiReceipt fontSize={"32"} className="tw-my-auto" />
          <p className="tw-self-center tw-whitespace-nowrap tw-text-[10px] tw-font-medium">
            Open Bets
          </p>
        </div>

        <label className="toggle tw-self-center tw-flex tw-flex-col tw-items-center tw-ml-4 ">
          <input type="checkbox" />
          <span className="slider "></span>
          <span className="labels" data-on="Live" data-off="OFF"></span>
        </label>
      </div>
    </div>
  )
}

async function getBetData(setBetData, dispatch, paramID) {
  const response = await FetchData(`betting/event/${paramID}/bets`)
  if (response.success) {
    setBetData(response.data)
    dispatch(setPlacedBetData(response.data))
  }
}
function Layout({ children }) {
  const { isModalOpen, toggle } = useModal()
  const dispatch = useDispatch()
  const params = useParams()
  const [betData, setBetData] = useState([])
  const isNewBetPlaced = useSelector((state) => state.sportsContext.newBet)

  useEffect(() => {
    let paramID = params?.id
    getBetData(setBetData, dispatch, paramID)
  }, [params.id, isNewBetPlaced])

  let team = decodeURIComponent(params["teamA-teamB"]).split("-")
  let competition = decodeURIComponent(params["title"])

  return (
    <div className="tw-relative">
      <Headers toggle={toggle} competition={competition} team={team} />
      <Modal isModalOpen={isModalOpen} toggle={toggle}>
        <OpenBets betData={betData} />
      </Modal>
      {children}

      {/* <BottomMenu /> */}
    </div>
  )
}

export default Layout
