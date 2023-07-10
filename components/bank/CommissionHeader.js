import { Input } from "@components/common/InputComponent"
import { BiWallet } from "react-icons/bi"

function CommissionHeader({ name, setName, commission }) {
  return (
    <>
      <div
        className="tw-bg-[#2B2B31] tw-border-[1px] tw-border-[#2B2B31] tw-flex tw-py-2  tw-h-fit tw-items-center tw-w-full tw-rounded-xl tw-justify-between tw-px-4"
        style={{ borderStyle: "outset" }}
      >
        <div className="tw-flex">
          <div
            className="tw-bg-[#3B3B42] tw-rounded-full  tw-p-2 tw-ml-2"
            style={{ borderStyle: "outset" }}
          >
            <BiWallet fontSize={32} />
          </div>

          <span className="tw-text-14px tw-self-center tw-ml-2">
            Total Commission
          </span>
        </div>

        <span className="tw-font-semibold">{commission}</span>
      </div>
      {/* <Input
        label={"User Name"}
        type={"text"}
        value={name}
        className={"tw-h-14"}
        style={{ minWidth: "100%" }}
        setValue={setName}
      /> */}
    </>
  )
}

export default CommissionHeader
