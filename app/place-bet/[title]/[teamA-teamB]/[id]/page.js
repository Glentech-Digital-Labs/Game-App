"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import { Accordion } from "@components"
import FetchData from "@utils/Fetcher"

import { useDispatch, useSelector } from "react-redux"

import {
  setEventSelectionData,
  receiveData,
} from "/redux/feature/socket/socketSlice"

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
    return () => {
      getData()
    }
  }, [eventId])

  useEffect(() => {
    if (!socket) {
      return () => {}
    } else {
      socket.emit("SUBSCRIBE_AN_EVENT", `${eventId}`, (response) =>
        console.log(response)
      )
      socket.on("NEW_ODDS", (data) => {
        // let changedData = JSON.stringify(data[1])
        // let dataIs = { data: data[1] }
        // console.log("Data of New Odds", data)
        const dataChange = { data }
        setMachPointsData(data)

        dispatch(receiveData(dataChange))
      })
    }
    return () => {
      socket.emit("UN_SUBSCRIBE_AN_EVENT", `${eventId}`, (data, callback) => {
        console.log("Unsubscribe kar diya")
        callback("SUBSCRIBE_AN_EVENT")
      })
    }
  }, [socket])

  console.log("Math point", matchPointsData)

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
