"use client"
import React, { useEffect } from "react"

import { Accordion } from "@components"
let content1 = {
  type: ["Back", "lay"],
  Questions: {
    "Gujarat titan": [
      ["1.01", "100"],
      ["2.03", "200"],
    ],

    "Chennai super king": [
      ["1.01", "100"],
      ["2.34", "200"],
    ],
    "Draw match": [
      ["1.01", "100"],
      ["2.03", "200"],
    ],
  },
}
let content2 = {
  type: ["Back", "lay"],
  Questions: {
    "Gujarat titan": [
      ["1.01", "100"],
      ["2.03", "200"],
    ],

    "Chennai super king": [
      ["1.01", "100"],
      ["2.34", "200"],
    ],
    "Draw match": [
      ["1.01", "100"],
      ["2.03", "200"],
    ],
  },
}

let title2 = "Book Maker"

function Bet() {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/uXWycyeTeCs"
        width={"100%"}
        height={200}
        loading="eager"
        sandbox="allow-scripts  allow-same-origin"
      ></iframe>

      <Accordion title={title2} content={content1} shouldOpen={true} />
      <Accordion title="Fancy Bet" content={content2} />
      <Accordion title="Section 3" content="Content for Section 3" />
    </div>
  )
}

export default Bet
