function getTomorrowTime(dateStr) {
  // Parse the date string into a Date object.
  const date = new Date(dateStr)

  // Add one day to the date object.
  date.setDate(date.getDate() + 1)

  // Format the date object into a string in the format "hh:mm aaa".
  const timeStr = date.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    // ampm: true,
  })

  // Return the time string.
  return `${timeStr} tomorrow`
}

function getRelativeTime(dateStr) {
  // Parse the date string into a Date object.
  const date = new Date(dateStr)

  // Get the current date.
  const today = new Date()

  // Calculate the difference between the two dates.
  const difference = date - today

  // If the difference is one day, return the time tomorrow.
  if (difference === 1) {
    return `${getTomorrowTime(dateStr)}`
  } else if (difference === 0) {
    // If the date is today, return the time in the format "hh:mm".
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    })
  } else {
    // Otherwise, return the date in the format "dd/MM/yyyy".
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }
}

function transformNestedObject(obj) {
  const result = []

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (key.includes(".")) {
        const keys = key.split(".")
        let currentObj = result

        for (let i = 0; i < keys.length - 1; i++) {
          const nestedKey = keys[i]
          currentObj[nestedKey] = currentObj[nestedKey] || {}
          currentObj = currentObj[nestedKey]
        }

        const lastKey = keys[keys.length - 1]
        currentObj[lastKey] = value
      } else {
        result[key] = value
      }
    }
  }

  return result
}

function getBettingPrice(oddsData, item) {
  let matchOdds = oddsData?.["markets"] || []
  let allKeys = Object.keys(matchOdds)

  let backPrices = 0
  let layPrices = 0

  if (allKeys.length !== 0) {
    allKeys?.map((mKid, index) => {
      if (mKid == item["marketId"]) {
        oddsData["markets"][mKid]["selections"]?.map((selection, index) => {
          if (selection.sId == item.id) {
            backPrices = selection["backPrices"][0]?.["price"] || 0
            layPrices = selection["layPrices"][0]?.["price"] || 0
          }
        })
      }
    })
  }
  return {
    backPrices,
    layPrices,
  }
}

function calculateWinningOutcomesPAndL(teamId, placedBetData, setTeamBetId) {
  if (typeof teamId === null || typeof teamId === undefined) return

  return placedBetData.reduce((prev, bet) => {
    const { odds, amount } = bet
    if (bet.selectionId === teamId) {
      setTeamBetId(teamId)
      bet.betType === "BACK"
        ? (prev += amount * (odds - 1))
        : (prev -= amount * (odds - 1))
    } else {
      bet.betType === "BACK" ? (prev -= amount) : (prev += amount)
    }
    return prev
  }, 0)
}

function calculateProfitAndLiability(amount, betType, odds) {
  if (
    typeof amount === "number" ||
    typeof odds === "number" ||
    Object.values(betTypes).includes(betType)
  ) {
    if (betType === betTypes.BACK)
      return {
        profit: amount * (odds - 1),
        liability: amount,
      }

    return {
      profit: amount,
      liability: amount * (odds - 1),
    }
  }
}
// Profit loss calculation

function formatDateTime(dateTime) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }

  const formattedDateTime = new Date(dateTime)
    .toLocaleString("en-US", options)
    .toUpperCase()
  return formattedDateTime
}

// Cash out of Data

const bets = [
  { type: "back", amount: 10, initialOdds: 2.5 },
  { type: "lay", amount: 15, initialOdds: 3.0 },
  // Add more bets if needed
]

const calculateCashoutAmount = (bets, currentOdds) => {
  let totalPotentialPayout = 0
  let totalPotentialLiability = 0

  // Calculate potential payouts and liabilities for each bet based on current odds
  bets.forEach((bet) => {
    const potentialPayout = bet.amount * currentOdds[bet.type]
    if (bet.type === "back") {
      totalPotentialPayout += potentialPayout
    } else if (bet.type === "lay") {
      totalPotentialLiability += potentialPayout
    }
  })

  // Calculate cashout amount based on current outcomes
  const currentOutcomes = {
    // Example outcomes, you should replace with actual outcomes
    backWin: true,
    layWin: false,
  }

  let cashoutAmount = 0

  if (currentOutcomes.backWin) {
    cashoutAmount = totalPotentialPayout
  } else if (currentOutcomes.layWin) {
    cashoutAmount = -totalPotentialLiability
  }

  return cashoutAmount
}

const currentOdds = {
  back: 3.0,
  lay: 2.0,
  // Add more odds if needed
}

const cashoutAmount = calculateCashoutAmount(bets, currentOdds)

export {
  getRelativeTime,
  transformNestedObject,
  calculateWinningOutcomesPAndL,
  getBettingPrice,
  calculateProfitAndLiability,
  formatDateTime,
  calculateCashoutAmount,
}

// Profit loss calculation
const betTypes = {
  BACK: "BACK",
  LAY: "LAY",
}
