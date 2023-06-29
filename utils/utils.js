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

export { getRelativeTime }
