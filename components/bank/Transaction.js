"use client"
import React, { useState } from "react"
import { YellowButton } from "@components/common"
import { TransactionCard } from "./TransactionCard"
import { Header } from "./Transactions.server"
import { Input } from "@components/common/InputComponent"
import Data from "utils/config"

const BASE_URL = Data.BASE_URL

async function getTransactionData({ url, dates }) {
  const queryParams = {
    ["from"]: dates?.from,
    ["to"]: dates?.to,
    page: "1",
    perPage: "10",
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
      return data.data.records
    })
    .catch((error) => console.error(error))
}

function SummeryComponent({ label_1, data_1, label_2, data_2 }) {
  return (
    <>
      <div className="tw-flex tw-justify-between tw-py-2">
        <div className="tw-flex">
          <p>{label_1}</p>
          <div>: {data_1}</div>
        </div>
        <div className="tw-flex">
          <p>{label_2}</p>
          <div>: {data_2}</div>
        </div>
      </div>
    </>
  )
}

function InputComponent({
  dates,
  setDates,
  paymentDetails,
  setPaymentDetails,
}) {
  return (
    <>
      <div className="tw-col-span-1 tw-grid tw-grid-rows-2 tw-min-w-full">
        <Input
          type={"date"}
          label={"From"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600 "}
          value={dates.from}
          field={"from"}
          setValue={setDates}
        />

        <Input
          type={"text"}
          value={paymentDetails.transactionType}
          label={"Transition Type"}
          setValue={setPaymentDetails}
          field={"transactionType"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600 "}
        />
      </div>
      <div className="tw-col-span-1 tw-grid tw-grid-rows-2 tw-min-w-full">
        <Input
          type={"date"}
          label={"To"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600 "}
          value={dates.to}
          field={"to"}
          setValue={setDates}
        />
        <Input
          type={"text"}
          value={paymentDetails.paymentStatus}
          label={"Status"}
          setValue={setPaymentDetails}
          field={"paymentStatus"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600"}
        />
      </div>
    </>
  )
}

const today = new Date().toISOString().split("T")[0]
function Transaction({ children }) {
  const [isOpen, setIsOpen] = useState(true)
  const [dates, setDates] = useState({
    from: today,
    to: today,
  })
  const [transitionData, setTransactionData] = useState([])

  const toggleHeight = () => {
    setIsOpen(!isOpen)
  }

  const [paymentDetails, setPaymentDetails] = useState({
    transactionType: "Hello",
    paymentStatus: "Hau",
  })

  async function getData() {
    const dataItem = await getTransactionData({
      url: "accounts/transactions",
      dates,
    })
    setTransactionData(dataItem)
    console.log(dataItem)
  }

  return (
    <>
      <div className="tw-bg-[#201F29] tw-font-normal tw-pt-4 tw-px-4">
        <div
          className={` tw-py-2 tw-min-w-full container   ${
            isOpen ? "open" : "closed"
          }`}
        >
          <Header />
          <div
            className={`tw-grid tw-grid-cols-2  tw-gap-x-2  tw-min-w-full  `}
          >
            <InputComponent
              dates={dates}
              setDates={setDates}
              paymentDetails={paymentDetails}
              setPaymentDetails={setPaymentDetails}
            />
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
            label_1={"Transition type"}
            label_2={"Status"}
            data_1={paymentDetails.transactionType}
            data_2={paymentDetails.paymentStatus}
          />
        </div>
      </div>
      <div
        onClick={toggleHeight}
        className="tw-bg-[#201F29] tw-relative tw-mx-auto tw-w-20 tw-h-8  tw-px-4   tw-text-center  tw-rounded-lg"
      >
        Hide
      </div>
      {transitionData.map((item, index) => (
        <TransactionCard
          amount={item.amount}
          approvedDate={item.approvedAt}
          requestData={item.createdAt}
          currency={item.currency}
          status={item.status}
          type={item.type}
          closingBalance={item.closingBal}
        />
      ))}
      {/* <TransactionCard amount={1000} status={"Rejected"} /> */}
    </>
  )
}

export { Transaction }
