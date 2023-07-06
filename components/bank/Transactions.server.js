import { BiWallet } from "/utils/Icons"
import { Input } from "@components/common/InputComponent"

function Header() {
  return (
    <div className="tw-flex ">
      <div
        className="tw-bg-[#2B2B31]  tw-border-2 tw-border-[#2B2B31] tw-flex tw-items-center  tw-mr-2  tw-w-[50%] tw-rounded-xl"
        style={{ borderStyle: "outset" }}
      >
        <div
          className="tw-bg-[#3B3B42] tw-rounded-full tw-p-2 tw-flex tw-my-2 tw-ml-2 "
          style={{ borderStyle: "outset" }}
        >
          <BiWallet fontSize={18} className="tw-self-center" />
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-pl-2 ">
          <span className="tw-text-12px">Total Deposit</span>
          <span className="tw-font-semibold">7500</span>
        </div>
      </div>
      <div
        className="tw-bg-[#2B2B31] tw-border-2 tw-border-[#2B2B31] tw-flex  tw-items-center tw-w-[50%] tw-rounded-xl"
        style={{ borderStyle: "outset" }}
      >
        <div
          className="tw-bg-[#3B3B42] tw-rounded-full  tw-p-2 tw-ml-2"
          style={{ borderStyle: "outset" }}
        >
          <BiWallet fontSize={18} />
        </div>
        <div className="tw-flex tw-flex-col  tw-ml-2 ">
          <span className="tw-text-12px">Total WithDrawals</span>
          <span className="tw-font-semibold">7500</span>
        </div>
      </div>
    </div>
  )
}
function InputComponent() {
  return (
    <>
      <div className="tw-col-span-1 tw-grid tw-grid-rows-2 tw-min-w-full">
        <Input
          type={"date"}
          label={"From"}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600 "}
        />

        <Input
          type={"text"}
          value={"Deposit"}
          label={"Transition Type"}
          setValue={() => {}}
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
        />
        <Input
          type={"text"}
          value={"Deposit"}
          label={"Status"}
          setValue={() => {}}
          style={{ minWidth: "100%" }}
          className={"tw-border-2  tw-border-gray-600"}
        />
      </div>
    </>
  )
}

export { Header, InputComponent }
