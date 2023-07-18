"use client"
import { useRouter } from "next/navigation"
import { AiOutlineLeft } from "react-icons/ai"
import Logo from "/public/images/Sportradar-log.svg"
import { HeaderProfile } from "@components"
import Image from "next/image"

function HeaderLayout() {
  const router = useRouter()
  return (
    <>
      <div className="header tw-flex tw-justify-between ">
        <AiOutlineLeft
          fontSize={32}
          onClick={() => router.back()}
          className="tw-self-center"
        />
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo of sports star"
          className="tw-relative tw-align-baseline tw-ml-2"
          onClick={() => router.push("/home")}
        />
        <HeaderProfile />
      </div>
    </>
  )
}

export { HeaderLayout }
