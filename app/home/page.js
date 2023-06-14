import { MatchCard } from "@components"
import React from "react"

function HomePage() {
  return (
    <>
      <div className="tw-mx-2">
        <div className="tw-h-8 tw-min-w-full tw-bg-gradient-to-r tw-from-slate-900 tw-to-black tw-pl-2 tw-my-auto">
          Indian Premium League
        </div>
        <MatchCard
          back={"2.1"}
          lay={"2.4"}
          firstTeam={"Rajasthan Royals"}
          secondTeam={"Chennai super kings"}
          time={"4:30 pm tomorrow "}
        />
        <MatchCard
          back={"1.5"}
          lay={"1.8"}
          firstTeam={"Kolkata Knight riders"}
          secondTeam={"Bhojpuri Sher"}
          time={"4:30 pm tomorrow "}
        />
        <MatchCard
          back={"2.1"}
          lay={"2.4"}
          firstTeam={"Rajasthan Royals"}
          secondTeam={"Chennai super kings"}
          time={"4:30 pm tomorrow "}
        />
        <div className="tw-h-8 tw-min-w-full tw-bg-gradient-to-r tw-from-slate-900 tw-to-black tw-pl-2 tw-my-auto">
          Bhojuri Premium Khela
        </div>
        <MatchCard
          back={"2.1"}
          lay={"2.4"}
          firstTeam={"Rajasthan Royals"}
          secondTeam={"Chennai super kings"}
          time={"4:30 pm tomorrow "}
        />
        <MatchCard
          back={"2.1"}
          lay={"2.4"}
          firstTeam={"Rajasthan Royals"}
          secondTeam={"Chennai super kings"}
          time={"4:30 pm tomorrow "}
        />
        <MatchCard
          back={"2.1"}
          lay={"2.4"}
          firstTeam={"Rajasthan Royals"}
          secondTeam={"Chennai super kings"}
          time={"4:30 pm tomorrow "}
        />
      </div>
    </>
  )
}

export default HomePage
