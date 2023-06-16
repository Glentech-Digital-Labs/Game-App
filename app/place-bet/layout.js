"use client"
import React from "react"
import "./index.css"
import { AiOutlineLeft } from "react-icons/ai"
import { CiReceipt } from "react-icons/ci"

import { BottomMenu, Modal, OpenBets } from "@components"
import { useModal } from "@hooks"

function Headers({ toggle }) {
  return (
    <div className="tw-flex tw-justify-between tw-px-2 header ">
      <div className="tw-flex tw-self-center">
        <AiOutlineLeft fontSize={32} className="tw-self-center" />
        <div>
          <p>Indian Premiere League</p>
          <h2>Gujarat vs Mumbai</h2>
        </div>
      </div>
      <div className="tw-flex tw-justify-center" onClick={toggle}>
        <CiReceipt fontSize={"32"} className="tw-my-auto" />
        <p className="tw-self-center tw-whitespace-nowrap">Open Bets</p>
      </div>

      <label className="toggle tw-self-center ">
        <input type="checkbox" />
        <span className="slider"></span>
        <span className="labels" data-on="Live" data-off="OFF"></span>
      </label>
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
