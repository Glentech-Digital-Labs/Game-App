"use client"
import { LockedCard, MatchCard, MatchCardLoading } from "@components"
import FetchData from "@utils/Fetcher"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getRelativeTime } from "/utils/utils"
import Link from "next/link"
import { formatDateTime } from "@utils/utils"

function HomePage() {
  const selectedSportsId = useSelector((state) => state.sportsContext)
  const [singleSportsData, setSingleSportsData] = useState([])
  const socket = useSelector((state) => state.socket.socket)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchSportsData() {
      setLoading(true)
      const response = await FetchData(
        `sports/${selectedSportsId.sportsId}/all/events`,
        { next: { revalidate: 60 * 5 } }
      )

      if (!!response.ok) {
        setLoading(false)
        throw new Error("Some error while fetching  the data")
      }

      if (response.success) {
        setSingleSportsData(response.data)
        setLoading(false)
      }
      if (!response.success) {
        setLoading(false)
        throw new Error(" Unable to to fetch the data")
      }
    }
    fetchSportsData()
    // return () => {
    //   fetchSportsData()
    // }
  }, [selectedSportsId.sportsId])

  return (
    <>
      {loading ? (
        Array(10)
          .fill(0)
          .map((item, index) => <MatchCardLoading key={index} />)
      ) : (
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

                return match["inPlay"] ? (
                  <Link
                    href={`/place-bet/${newTitle}/${match.teamA}-${match.teamB}/${match.id}`}
                    key={match.id}
                    prefetch={true}
                  >
                    <MatchCard
                      back={match.layPrice}
                      lay={match.backPrice}
                      firstTeam={match.teamB}
                      secondTeam={match.teamA}
                      time={formatDateTime(match.openDate)}
                    />
                  </Link>
                ) : (
                  <div className="tw-relative" key={match.id}>
                    {/* <LockedCard></LockedCard> */}
                    <MatchCard
                      back={match.layPrice}
                      lay={match.backPrice}
                      firstTeam={match.teamB}
                      secondTeam={match.teamA}
                      time={formatDateTime(match.openDate)}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default HomePage
