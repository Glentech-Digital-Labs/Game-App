"use client"
import { ProfileEdit } from "@components"
import protectRouteWithCookie from "@hooks/ProtectedRoute"
import React from "react"

function Profile() {
  return (
    <>
      <ProfileEdit />
    </>
  )
}

export default protectRouteWithCookie(Profile)
