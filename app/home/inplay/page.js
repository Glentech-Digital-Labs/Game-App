"use client"
import { InPlayMatchCard, MatchCard } from "@components"
import FetchData from "@utils/Fetcher"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRelativeTime } from "/utils/utils"
import Link from "next/link"
import { transformNestedObject } from "/utils/utils"
import { receiveData } from "@redux/feature/socket/socketSlice"

function HomePage() {
  const selectedSportsId = useSelector((state) => state.sportsContext)
  const [singleSportsData, setSingleSportsData] = useState([])
  const socket = useSelector((state) => state.socket.socket)
  const matchData = transformNestedObject(singleSportsData)
  const [matchPointsData, setMachPointsData] = useState([])
  const dispatch = useDispatch()
  const oddsData = useSelector((state) => state.socket.events_selection.data)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchSportsData() {
      const response = await FetchData(
        `sports/${selectedSportsId.sportsId}/inplay/events`,
        { next: { revalidate: 60 } }
      )

      if (response.success) {
        setSingleSportsData(response.data)
      }
    }
    fetchSportsData()
  }, [selectedSportsId.sportsId])

  const handleEvent = (data, callback) => {
    const dataChange = { data }
    setMachPointsData(data)
    dispatch(receiveData(dataChange))
    if (typeof callback === "function") {
      callback("Acknowledgment from client")
    }
  }
  useEffect(() => {
    if (!socket) {
      return () => {}
    }
    socket.emit(
      `SUBSCRIBE_A_SPORT`,
      `${selectedSportsId.sportsId}`,
      (response) => {
        console.log(`Response Received `, response)
      }
    )
    socket.on("NEW_SPORTS_ODDS", handleEvent)
    return () => {
      socket.emit("UN_SUBSCRIBE_AN_EVENT", handleEvent)
      socket.off("NEW_SPORTS_ODD", handleEvent)
    }
  }, [selectedSportsId.sportsId, socket])

  return (
    <>
      {loading &&
        Array(10)
          .fill(0)
          .map((item) => <MatchCardLoading />)}
      <div className="tw-mb-24">
        {matchData.map((match, index) => {
          let newTitle = !!match["competition.title"]
            ? match["competition.title"]
            : "Ram"
          let selection = oddsData?.[match.id]?.["selections"][0]
          const backPrice = selection?.["backPrices"]?.[0]?.["price"] || 0
          const layPrice = selection?.["layPrices"]?.[0]?.["price"] || 0
          return (
            <Link
              href={`/place-bet/${newTitle}/${match.teamA}-${match.teamB}/${match.id}`}
              key={match.id}
              prefetch={true}
            >
              <InPlayMatchCard
                title={match["competition.title"]}
                time={getRelativeTime(match.openDate)}
                teamA={match.teamA}
                teamB={match.teamB}
                backPrice={backPrice}
                layPrice={layPrice}
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default HomePage