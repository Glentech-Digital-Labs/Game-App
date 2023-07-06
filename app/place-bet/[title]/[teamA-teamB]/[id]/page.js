"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import { Accordion } from "@components"
import FetchData from "@utils/Fetcher"

import { useDispatch, useSelector } from "react-redux"

import { receiveData } from "/redux/feature/socket/socketSlice"

async function getData(eventId, setMatchData) {
  const response = await FetchData(`sports/event/${eventId}/markets`)
  if (response.success) {
    setMatchData(response.data)
  }
}

function Bet() {
  const params = useParams()
  const dispatch = useDispatch()
  const [eventId, setEventId] = useState(params.id)
  const [matchData, setMatchData] = useState([])
  const socket = useSelector((state) => state.socket.socket)
  const [matchPointsData, setMachPointsData] = useState([])

  useEffect(() => {
    getData(eventId, setMatchData)
    // return () => {
    //   getData()
    // }
  }, [eventId])

  const handleEvent = (data, callback) => {
    const dataChange = { data }
    setMachPointsData(data)
    dispatch(receiveData(dataChange))
    if (typeof callback === "function") {
      console.log(`Unsubscrice the data`)
      callback("Acknowledgment from client")
    }
  }

  useEffect(() => {
    if (!socket) {
      return () => {}
    }
    socket.emit("SUBSCRIBE_AN_EVENT", `${eventId}`, (response) =>
      console.log(response)
    )
    socket.on("NEW_EVENT_ODDS", handleEvent)
    return () => {
      socket.emit("UN_SUBSCRIBE_AN_EVENT", `${eventId}`, handleEvent)
      socket.off("NEW_EVENT_ODDS", handleEvent)
    }
  }, [socket])

  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/uXWycyeTeCs"
        width={"100%"}
        height={200}
        loading="eager"
        title="myFrame"
        sandbox="allow-scripts  allow-same-origin"
      ></iframe>

      <Accordion data={matchData} />
    </div>
  )
}

export default Bet
