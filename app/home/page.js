"use client"
import { MatchCard } from "@components"
import FetchData from "@utils/Fetcher"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getRelativeTime } from "/utils/utils"
import Link from "next/link"

function HomePage() {
  const selectedSportsId = useSelector((state) => state.sportsContext)
  const [singleSportsData, setSingleSportsData] = useState([])
  const socket = useSelector((state) => state.socket.socket)

  useEffect(() => {
    async function fetchSportsData() {
      const response = await FetchData(
        `sports/${selectedSportsId.sportsId}/all/events`,
        { next: { revalidate: 60 * 5 } }
      )

      if (response.success) {
        setSingleSportsData(response.data)
      }
    }
    fetchSportsData()
    // return () => {
    //   fetchSportsData()
    // }
  }, [selectedSportsId.sportsId])

  return (
    <div className="tw-mb-20 ">
      {singleSportsData.map((singleSport, index) => (
        <div
          className="tw-mx-2 tw-cursor-pointer"
          key={singleSport.competitionId}
        >
          <div
            className="tw-h-12 tw-min-w-full  tw-pl-2 tw-my-auto tw-flex tw-items-center"
            style={{
              backgroundImage: `linear-gradient(133deg, #3D3D46 0%, #2C2B3A 26.50%, #15131D`,
            }}
            key={singleSport.competitionId}
          >
            <span>{singleSport?.competitionTitle}</span>
          </div>

          {singleSport.events?.map((match) => {
            let newTitle = !!match["competition.title"]
              ? match["competition.title"]
              : "Ram"
            return (
              <Link
                href={`/place-bet/${newTitle}/${match.teamA}-${match.teamB}/${match.id}`}
                key={match.id}
                prefetch={true}
              >
                <MatchCard
                  back={"2.1"}
                  lay={"2.4"}
                  firstTeam={match.teamA}
                  secondTeam={match.teamB}
                  time={getRelativeTime(match.openDate)}
                />
              </Link>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default HomePage
