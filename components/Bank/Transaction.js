"use client"
import React, { useEffect, useRef, useState } from "react"
import { MultipleSelect, YellowButton } from "@components/common"
import { TransactionCard } from "./TransactionCard"
import { Header } from "./Transactions.server"
import { Input } from "@components/common/InputComponent"
import Data from "utils/config"
import SummeryComponent from "./Summery"

const BASE_URL = Data.BASE_URL
const optionsTransactions = ["DEPOSIT", "WITHDRAWAL", "ALL"]
const optionStatus = ["PENDING", "REJECTED", "COMPLETED", "ALL"]
async function getTransactionData({
  url,
  dates,
  transactionType,
  paymentStatus,
  page,
}) {
  const queryParams = {
    ["from"]: dates?.from,
    ["to"]: dates?.to,
    transactionType: transactionType,
    status: paymentStatus,
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
      return data.data.records
    })
    .catch((error) => console.error(error))
}

function InputComponent({
  dates,
  setDates,
  paymentStatus,
  setPaymentStatus,
  transactionType,
  setTransactionType,
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

        <MultipleSelect
          options={optionsTransactions}
          label={"Transaction"}
          selectedOptions={transactionType}
          setSelectedOptions={setTransactionType}
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

        <MultipleSelect
          options={optionStatus}
          label={"Status"}
          selectedOptions={paymentStatus}
          setSelectedOptions={setPaymentStatus}
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
  const [page, setPage] = useState(1)

  const toggleHeight = () => {
    setIsOpen(!isOpen)
  }
  const [transactionType, setTransactionType] = useState("")
  const [paymentStatus, setPaymentStatus] = useState("")
  const ref = useRef(false)

  async function getData() {
    const dataItem = await getTransactionData({
      url: "accounts/transactions",
      dates,
      transactionType,
      paymentStatus,
      page,
    })
    setTransactionData(dataItem)
    console.log(dataItem)
  }
  function loadHandler() {
    setPage((prevPage) => prevPage + 1)
    getData()
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
              paymentStatus={paymentStatus}
              setPaymentStatus={setPaymentStatus}
              transactionType={transactionType}
              setTransactionType={setTransactionType}
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
            data_1={transactionType}
            data_2={paymentStatus}
          />
        </div>
      </div>
      <div
        onClick={toggleHeight}
        className="tw-bg-[#201F29] tw-relative tw-mx-auto tw-w-20 tw-h-8  tw-px-4   tw-text-center  tw-rounded-lg"
      >
        Hide
      </div>
      {transitionData?.map((item, index) => (
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
      {transitionData.length >= 4 && (
        <button
          onClick={() => loadHandler()}
          className="tw-mx-auto tw-text-14px tw-bg-gray-500 tw-w-fit tw-h-fit tw-my-4  tw-rounded-xl tw-px-2 tw-py-2 tw-translate-x-[160%]  "
        >
          Load More
        </button>
      )}
    </>
  )
}

export { Transaction }
