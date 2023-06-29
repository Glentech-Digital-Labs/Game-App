"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import { Accordion } from "@components"
import FetchData from "@utils/Fetcher"

async function getData(eventId, setMatchData) {
  const response = await FetchData(`sports/event/${eventId}`)
  if (response.success) {
    setMatchData(response.data)
  }
}

function Bet() {
  const params = useParams()
  const [eventId, setEventId] = useState(params.id)
  const [matchData, setMatchData] = useState([])

  useEffect(() => {
    getData(eventId, setMatchData)

    return () => {
      getData()
    }
  }, [eventId])

  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/uXWycyeTeCs"
        width={"100%"}
        height={200}
        loading="eager"
        sandbox="allow-scripts  allow-same-origin"
      ></iframe>

      <Accordion
        // title={title2}
        // content={content1}
        // shouldOpen={true}
        // matchData={matchData}
        data={matchData}
      />
      {/* <Accordion title="Fancy Bet" content={content2} /> */}
      {/* <Accordion title="Section 3" content="Content for Section 3" /> */}
    </div>
  )
}

export default Bet
