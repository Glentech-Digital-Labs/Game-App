"use client"
import React, { useState, useEffect, useRef } from "react"
import { BiUser, BiWallet } from "/utils/Icons"
import { useDispatch, useSelector } from "react-redux"
import { YellowButton } from "./YellowButton"
import { useRouter } from "next/navigation"
import { BlackButton } from "./BlackButton"
import FetchData from "@utils/Fetcher"
import { resetUser } from "@redux/feature/user/userSlice"
import { delete_cookie } from "@utils/utils"

function RegisterComponent() {
  const router = useRouter()
  return (
    <div className="tw-flex tw-ml-auto ">
      <YellowButton
        label={"Login"}
        className="tw-px-2 tw-mx-2 tw-self-center"
        style={{ height: "2rem", width: "4rem" }}
        onClick={() => router.push("/login")}
      />
      <BlackButton
        label={"Registration"}
        className="tw-px-2 tw-mx-2 tw-self-center"
        style={{ height: "2rem" }}
        onClick={() => router.push("/registration")}
      />
    </div>
  )
}
async function getLoginData() {
  const response = await FetchData("punter/check/session")
  if (response.success) {
    return response.message
  }
  return response
}

function HeaderProfile() {
  const router = useRouter()
  const userData = useSelector((state) => state.userContext)
  const [isLoggedIn, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  let ref = useRef(1)
  const amount =
    parseFloat(userData?.depositBalance) + parseFloat(userData?.bonusBalance)
  let isUserData = userData["userName"]?.length > 1

  useEffect(() => {
    async function getData() {
      setIsLoading(isUserData)
    }
    getData()
  }, [isUserData])
  useEffect(() => {
    const interval = setInterval(async () => {
      const responseData = await getLoginData()
      if (responseData.status == "401" || responseData.success == "false") {
        dispatch(resetUser())
        delete_cookie("sessionId")
      }
    }, 1000 * 60)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="tw-flex  tw-justify-between tw-w-screen">
      {isLoggedIn ? (
        <>
          <div className="tw-flex tw-ml-4 tw-flex-col tw-justify-center">
            <BiWallet className="tw-self-center" fontSize={30} />
            <span className="tw-self-center">
              &#8377;{amount.toFixed(1) || 0}
            </span>
          </div>
          <div
            className="tw-flex tw-align-middle tw-mx-2 tw-flex-col tw-justify-center"
            onClick={() => router.push("/profile")}
          >
            <BiUser className="tw-self-center" fontSize={30} />
            <span className="tw-self-center">{userData.userName}</span>
          </div>

          <YellowButton
            label={"+ Add"}
            className="tw-px-2 tw-mx-2 tw-self-center"
            style={{ height: "2rem", width: "4rem" }}
            onClick={() => router.push("/payment")}
          />
        </>
      ) : (
        <RegisterComponent />
      )}
    </div>
  )
}

export { HeaderProfile }
