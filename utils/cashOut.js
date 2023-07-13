export const cashOutFunction = (currentOddsTable, allUserBets) => {
  return allUserBets.reduce((prev, userBet) => {
    const { odds, amount: initialAmount, betType, selectionId, index } = userBet

    let backAmount,
      layAmount = 0

    if (betType === "LAY") {
      backAmount =
        (odds * initialAmount) / currentOddsTable[selectionId].backPrices[index]

      return initialAmount - backAmount
    } else {
      layAmount =
        (odds * initialAmount) / currentOddsTable[selectionId].layPrices[index]

      return layAmount - initialAmount
    }
  }, 0)
}

export const createOddsTable = (selections) => {
  const currentOddsTable = {}

  selections?.forEach((selection) => {
    currentOddsTable[selection.sId] = {
      backPrices: selection.backPrices.map((b) => b.price),
      layPrices: selection.layPrices.map((b) => b.price),
    }
  })

  return currentOddsTable
}
