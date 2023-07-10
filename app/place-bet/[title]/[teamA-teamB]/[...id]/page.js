"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import { Accordion } from "@components"
import FetchData from "@utils/Fetcher"

import { useDispatch, useSelector } from "react-redux"

import { receiveData } from "/redux/feature/socket/socketSlice"
import { resetUser } from "@redux/feature/user/userSlice"

function Bet() {
  const params = useParams()
  const dispatch = useDispatch()
  const [eventId, setEventId] = useState(params.id)
  const [matchData, setMatchData] = useState([])
  const socket = useSelector((state) => state.socket.socket)
  const [matchPointsData, setMachPointsData] = useState([])

  if (eventId.length > 8) {
    let xItem = eventId.split("/")
    setEventId(xItem[xItem.length - 1])
  }

  useEffect(() => {
    async function getData() {
      const response = await FetchData(`sports/event/${eventId}/markets`)
      if (response.success) {
        setMatchData(response.data)
      }
      // if (response.status == "401") {
      //   dispatch(resetUser())

      // }
    }
    getData()
    // return () => {
    //   getData()
    // }
  }, [eventId])

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
