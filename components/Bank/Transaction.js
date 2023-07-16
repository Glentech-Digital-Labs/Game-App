"use client"
import React, { useEffect, useRef, useState } from "react"
import { MultipleSelect, Nodata, YellowButton } from "@components/common"
import { TransactionCard } from "./TransactionCard"
import { Header } from "./Transactions.server"
import { Input } from "@components/common/InputComponent"
import Data from "utils/config"
import SummeryComponent from "./Summery"
import { InputComponent } from "./InputComponent"
import { ToastContainer, toast } from "react-toastify"
import { NOTIFICATION_SETTING } from "utils/constants"

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
    transactionType: transactionType || "ALL",
    status: paymentStatus || "ALL",
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
function Transaction({ children }) {
  const [isOpen, setIsOpen] = useState(true)
  const [isDataFetched, setIsDataFetched] = useState(false)

  const [transitionData, setTransactionData] = useState([])

  const toggleHeight = () => {
    setIsOpen(!isOpen)
  }
  const [transactionType, setTransactionType] = useState("")
  const [paymentStatus, setPaymentStatus] = useState("")
  const pageRef = useRef(1)

  async function getData() {
    const response = await getTransactionData({
      url: "accounts/transactions",
      dates,
      transactionType,
      paymentStatus,
      page: pageRef.current,
    })
    if (response.success) {
      setTransactionData(response.data.records)
      setIsDataFetched(true)
    }
    if (!response.success) {
      toast.error(`${response.message}`, {
        ...NOTIFICATION_SETTING,
      })
    }
  }
  function loadHandler() {
    pageRef.current = pageRef.current + 1
    getData()
  }

  const [dates, setDates] = useState({
    from: today,
    to: today,
  })

  return (
    <>
      <ToastContainer />
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
              defaultValue={today}
              setDates={setDates}
              paymentStatus={paymentStatus}
              setPaymentStatus={setPaymentStatus}
              transactionType={transactionType}
              setTransactionType={setTransactionType}
              optionsTransactions={optionsTransactions}
              optionStatus={optionStatus}
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
      {isDataFetched && transitionData?.length == 0 && (
        <Nodata message={"No transactions Data"} />
      )}
      {transitionData?.map((item, index) => (
        <TransactionCard
          amount={item.amount}
          approvedDate={item.approvedAt}
          requestData={item.createdAt}
          currency={item.currency}
          status={item.status}
          type={item.type}
          closingBalance={item.closingBal}
          key={index}
        />
      ))}
      {transitionData?.length >= 4 && (
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
