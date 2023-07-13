import { MultipleSelect } from "@components/common"
import { Input } from "@components/common/InputComponent"

const today = new Date().toISOString().split("T")[0]
function InputComponent({
  dates,
  setDates,
  paymentStatus,
  setPaymentStatus,
  transactionType,
  setTransactionType,
  optionStatus,
  optionsTransactions,
  defaultValue,
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
          defaultValue={defaultValue}
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
          defaultValue={defaultValue}
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

export { InputComponent }
