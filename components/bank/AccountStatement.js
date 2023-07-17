"use client"
import { MultipleSelect, Nodata, YellowButton } from "@components/common"
import { Input } from "@components/common/InputComponent"
import React, { useState } from "react"
import SummeryComponent from "./Summery"
import FetchData from "@utils/Fetcher"
import { TransactionCard } from "./TransactionCard"
import { ProfitLossCard } from "./ProfitLossCard"
import { sports } from "utils/sportsData"
import { formatDateTime } from "@utils/utils"
import { CommissionCard } from "./CommissionCard"
import { optionStatus, NOTIFICATION_SETTING } from "utils/constants"
import { ToastContainer, toast } from "react-toastify"

const today = new Date().toISOString().split("T")[0]

function InputComponent({
  dates,
  setDates,
  setTransactionType,
  transactionType,
}) {
  return (
    <>
      <div className="tw-grid tw-grid-cols-2 tw-min-w-full tw-gap-2">
        <Input
          type={"date"}
          label={"From"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600 tw-col-span-1"}
          value={dates.from}
          field={"from"}
          setValue={setDates}
        />

        <Input
          type={"date"}
          label={"To"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600 tw-col-span-1"}
          value={dates.to}
          field={"to"}
          setValue={setDates}
        />
      </div>
      <div className=" tw-w-full">
        <MultipleSelect
          options={optionStatus}
          label={"Transaction"}
          selectedOptions={transactionType}
          setSelectedOptions={setTransactionType}
        />
      </div>
    </>
  )
}

function AccountStatement() {
  const [dates, setDates] = useState({
    from: today,
    to: today,
  })
  const [transactionType, setTransactionType] = useState("ALL")
  const [isOpen, setIsOpen] = useState(true)
  const [page, setPage] = useState(1)
  const [transactions, setTransactions] = useState([])
  const [isDataFetched, setIsDataFetched] = useState(false)

  const toggleHeight = () => {
    setIsOpen(!isOpen)
  }
  const queryParams = {
    from: dates.from,
    to: dates.to,
    transactionType: transactionType,
    page,
    perPage: 10,
  }

  async function getAccountStatement() {
    const response = await FetchData(
      "accounts/account-statement",
      null,
      queryParams
    )
    if (response.success) {
      setTransactions(response.data.records)
      setIsDataFetched(true)
    }
    if (!response.success) {
      toast.error(`${response.message}`, {
        ...NOTIFICATION_SETTING,
      })
    }
  }
  function loadHandler() {
    setPage((prevPage) => prevPage + 1)
    getAccountStatement()
  }
  return (
    <>
      <ToastContainer />
      <div className="tw-bg-[#201F29] tw-font-normal tw-pt-4 tw-px-4">
        <div
          className={` tw-py-2 tw-min-w-full container   ${
            isOpen ? "open_statement" : "closed"
          }`}
        >
          <InputComponent
            dates={dates}
            setDates={setDates}
            transactionType={transactionType}
            setTransactionType={setTransactionType}
          />
          <YellowButton
            label={"Apply"}
            onClick={getAccountStatement}
            className={"tw-w-1/2 tw-translate-x-1/2 tw-mt-4 "}
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
          <div className="tw-flex tw-justify-between tw-py-2">
            <div className="tw-flex">
              <p>{"Transaction type"}</p>
              <div>: {transactionType}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={toggleHeight}
        className="tw-bg-[#201F29] tw-relative tw-mx-auto tw-w-20 tw-h-8  tw-px-4   tw-text-center  tw-rounded-lg"
      >
        {isOpen ? "Hide" : "show"}
      </div>
      {isDataFetched && transactions.length == 0 && (
        <Nodata message={"No account Data Available"} />
      )}
      {transactions?.map((item, index) => {
        if (!!optionStatus[index]["BET_PL"]) {
          return (
            <ProfitLossCard
              amount={item.amount}
              closingBal={item.closingBal}
              activity={item.event.title}
              sports={sports[item.sportId]}
              date={formatDateTime(item.updatedAt)}
              debit={item.pl}
              key={index}
            />
          )
        }

        if (
          !!optionStatus[index]["DEPOSIT"] ||
          !!optionStatus[index]["WITHDRAWAL"]
        ) {
          return (
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
          )
        }
        if (
          !!optionStatus[index]["REFERRAL_COMMISSION"] ||
          !!optionStatus[index]["BET_COMMISSION"]
        ) {
          return (
            <CommissionCard
              user={item["referent"]?.["userName"]}
              time={item["createdAt"]}
              amount={item.amount}
              match={item["event"]["title"]}
              series={item["competition"]["title"]}
              key={index}
            />
          )
        }
      })}

      {transactions.length >= 4 && (
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

export { AccountStatement }
