import React from "react"

function Rounded({ label, Icon, backgroundColor }) {
  const firstGradient = `159.46deg,
      #c4965b -45.75%,
      #efbe2c -45.75%,
      #b78a51 17.68%,
      #88612a 100.75%`

  let customStyle
  if (!!backgroundColor) {
    customStyle = { backgroundColor: backgroundColor }
  } else {
    customStyle = { backgroundImage: ` linear-gradient(${firstGradient})` }
  }

  return (
    <div
      className="tw-rounded-3xl tw-flex tw-justify-center tw-min-w-fit tw-px-4 tw-h-8 tw-my-4  tw-mx-2  tw-text-white"
      style={customStyle}
    >
      {Icon && <Icon fontSize={30} className="tw-my-auto" />}
      <p className="tw-self-center tw-font-semibold tw-text-10px ">{label}</p>
    </div>
  )
}

export { Rounded }
