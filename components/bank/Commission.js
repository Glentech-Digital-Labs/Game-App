"use client"
import React, { useState } from "react"
import "./index.css"
import { Input } from "@components/common/InputComponent"
import { Nodata, YellowButton } from "@components/common"
import SummeryComponent from "./Summery"
import CommissionHeader from "./CommissionHeader"
import Data from "utils/config"
import { CommissionCard } from "./CommissionCard"
import { toast } from "react-toastify"
import { optionStatus, NOTIFICATION_SETTING } from "utils/constants"

const BASE_URL = Data.BASE_URL
function InputComponent({ dates, setDates }) {
  return (
    <>
      <div className="tw-flex tw-justify-between tw-min-w-full tw-gap-2 ">
        <Input
          type={"date"}
          label={"From"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600 tw-pl-4 tw-flex-1 "}
          value={dates.from}
          field={"from"}
          setValue={setDates}
          parentStyle={{ minWidth: "100%" }}
        />

        <Input
          type={"date"}
          label={"To"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600 tw-flex-1"}
          value={dates.to}
          field={"to"}
          setValue={setDates}
          parentStyle={{ minWidth: "100%" }}
        />
      </div>
    </>
  )
}

async function getCommissionData({ url, dates, page }) {
  const queryParams = {
    ["from"]: dates?.from,
    ["to"]: dates?.to,
    page: page,
    perPage: "4",
  }
  const queryString = Object.keys(queryParams)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
    )
    .join("&")
  const requestUrl = `${BASE_URL}/${url}?${queryString}`
  return fetch(requestUrl, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      return data
    })
    .catch((error) => console.error(error))
}

const today = new Date().toISOString().split("T")[0]
function Commission() {
  const [dates, setDates] = useState({
    from: today,
    to: today,
  })
  const [isOpen, setIsOpen] = useState(true)
  const [commission, setCommission] = useState(5400)
  const [name, setName] = useState("Rohit")
  const [commissionTransactions, setCommissionTransactions] = useState([])
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [page, setPage] = useState(1)

  const toggleHeight = () => {
    setIsOpen(!isOpen)
  }

  async function getData() {
    setIsDataFetched(false)
    const response = await getCommissionData({
      url: "accounts/bet-commissions",
      dates,
      page,
    })
    if (response.success) {
      setCommissionTransactions(response.data.records)
      setIsDataFetched(true)
    }
    if (!response.success) {
      toast.error(`${response.message}`, {
        ...NOTIFICATION_SETTING,
      })
    }
  }

  return (
    <>
      <div className="tw-bg-[#201F29] tw-font-normal tw-pt-4 tw-px-4">
        <div
          className={` tw-py-2 tw-min-w-full commission_container   ${
            isOpen ? "commission_open" : "commission_closed"
          }`}
        >
          <CommissionHeader
            name={name}
            setName={setName}
            commission={commission}
          />
          <div
            className={`tw-grid tw-grid-cols-2  tw-gap-x-2  tw-min-w-full  `}
          >
            <InputComponent dates={dates} setDates={setDates} />
          </div>
          <YellowButton
            label={"Apply"}
            onClick={getData}
            className={"tw-w-1/2 tw-translate-x-1/2 "}
          />
        </div>

        <div
          className={`hiding_container ${
            isOpen ? "open_hiding_container" : "close_hiding_container"
          }`}
        >
          <SummeryComponent
            label_1={"From"}
            label_2={"To"}
            data_1={dates.from}
            data_2={dates.to}
          />
          <SummeryComponent
            label_1={"Commission"}
            label_2={"Status"}
            data_1={commission}
            data_2={"paymentStatus"}
          />
        </div>
      </div>
      <div
        onClick={toggleHeight}
        className="tw-bg-[#201F29] tw-relative tw-mx-auto tw-w-20 tw-h-8  tw-px-4   tw-text-center  tw-rounded-lg"
      >
        {isOpen ? "Hide" : "show"}
      </div>

      {commissionTransactions.length == 0 && isDataFetched && <Nodata />}
      {commissionTransactions?.map((item, index) => {
        return (
          <CommissionCard
            user={item["referent"]?.["userName"]}
            time={item["createdAt"]}
            amount={item.amount}
            match={item["event"]["title"]}
            series={item["competition"]["title"]}
          />
        )
      })}
    </>
  )
}

export { Commission }
