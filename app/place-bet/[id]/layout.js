"use client"
import React from "react"
import "./index.css"
import { AiOutlineLeft } from "/utils/Icons"
import { CiReceipt } from "/utils/Icons"

import { BottomMenu, Modal, OpenBets } from "@components"
import { useModal } from "@hooks"

function Headers({ toggle }) {
  return (
    <div className="tw-flex tw-justify-between tw-px-2 header ">
      <div className="tw-flex tw-self-center">
        <AiOutlineLeft fontSize={20} className="tw-self-center" />
        <div>
          <p className="tw-font-medium tw-text-[10px]">
            Indian Premiere League
          </p>
          <h2 className="tw-font-semibold tw-text-[14px] ">
            Gujarat vs Mumbai
          </h2>
        </div>
      </div>
      <div className="tw-flex ">
        <div className="tw-flex tw-justify-center" onClick={toggle}>
          <CiReceipt fontSize={"32"} className="tw-my-auto" />
          <p className="tw-self-center tw-whitespace-nowrap tw-text-[10px] tw-font-medium">
            Open Bets
          </p>
        </div>

        <label className="toggle tw-self-center tw-flex tw-flex-col tw-items-center tw-ml-4 ">
          <input type="checkbox" />
          <span className="slider "></span>
          <span className="labels" data-on="Live" data-off="OFF"></span>
        </label>
      </div>
    </div>
  )
}

function Layout({ children }) {
  const { isModalOpen, toggle } = useModal()
  return (
    <div className="tw-relative">
      <Headers toggle={toggle} />
      <Modal isModalOpen={isModalOpen} toggle={toggle}>
        <OpenBets />
      </Modal>
      {children}

      <BottomMenu />
    </div>
  )
}

export default Layout
