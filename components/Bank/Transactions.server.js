import { BiWallet } from "react-icons/bi"
import { Input } from "@components/common/InputComponent"

function Header() {
  return (
    <div className="tw-flex tw-mx-2 ">
      <div
        className="tw-bg-[#2B2B31] tw-border-2 tw-border-black tw-flex tw-items-center  tw-mr-2  tw-w-[45%] tw-rounded-t-xl"
        style={{ borderStyle: "outset" }}
      >
        <div
          className="tw-bg-[#3B3B42] tw-rounded-full tw-p-2 tw-flex tw-my-2 "
          style={{ borderStyle: "outset" }}
        >
          <BiWallet fontSize={32} className="tw-self-center" />
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-ml-2">
          Total Deposit
          <span className="tw-font-semibold">7500</span>
        </div>
      </div>
      <div
        className="tw-bg-[#2B2B31] tw-border-2 tw-border-black tw-flex tw-justify-center tw-items-center tw-w-[55%] tw-rounded-xl"
        style={{ borderStyle: "outset" }}
      >
        <div
          className="tw-bg-[#3B3B42] tw-rounded-full  tw-p-2"
          style={{ borderStyle: "outset" }}
        >
          <BiWallet fontSize={32} />
        </div>
        <div className="tw-flex tw-flex-col  tw-ml-2">
          Total WithDrawals
          <span className="tw-font-semibold">7500</span>
        </div>
      </div>
    </div>
  )
}
function InputComponent() {
  return (
    <>
      <div className="tw-col-span-1 tw-grid tw-grid-rows-2 ">
        {/* Need to change the color of border and Calender which is looking black */}
        <Input
          type={"date"}
          label={"From"}
          className={"tw-border-2  tw-border-gray-600 "}
        />
        <Input
          type={"text"}
          value={"Deposit"}
          label={"Transition Type"}
          setValue={() => {}}
          className={"tw-border-2  tw-border-gray-600 "}
        />
      </div>
      <div className="tw-col-span-1 tw-grid tw-grid-rows-2 ">
        <Input
          type={"date"}
          label={"To"}
          className={"tw-border-2  tw-border-gray-600 "}
        />
        <Input
          type={"text"}
          value={"Deposit"}
          label={"Status"}
          setValue={() => {}}
          className={"tw-border-2  tw-border-gray-600"}
        />
      </div>
    </>
  )
}

export { Header, InputComponent }
