"use client"
import { MatchCard } from "@components"
import FetchData from "@utils/Fetcher"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getRelativeTime } from "/utils/utils"
import { useRouter } from "next/navigation"
function HomePage() {
  const selectedSportsId = useSelector((state) => state.sportsContext)
  const [singleSportsData, setSingleSportsData] = useState([])

  const router = useRouter()

  async function fetchSportsData() {
    const response = await FetchData(
      `sports/${selectedSportsId.sportsId}/all/events`
    )
    if (response.success) {
      setSingleSportsData(response.data)
    }
    console.log("Response Data is there", response.data)
  }

  useEffect(() => {
    fetchSportsData()
    return () => {
      fetchSportsData()
    }
  }, [selectedSportsId.sportsId])

  function routeHandler(id) {
    router.push(`/place-bet/${id}`)
  }

  return (
    <>
      {singleSportsData.map((singleSport) => (
        <div className="tw-mx-2">
          <div
            className="tw-h-12 tw-min-w-full  tw-pl-2 tw-my-auto tw-flex tw-items-center"
            style={{
              backgroundImage: `linear-gradient(133deg, #3D3D46 0%, #2C2B3A 26.50%, #15131D`,
            }}
            key={singleSport.competitionId}
          >
            <span>{singleSport?.competitionTitle}</span>
          </div>

          {singleSport.events?.map((match) => (
            <div onClick={() => routeHandler(match.id)} key={match.id}>
              <MatchCard
                back={"2.1"}
                lay={"2.4"}
                firstTeam={match.teamA}
                secondTeam={match.teamB}
                time={getRelativeTime(match.openDate)}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default HomePage
