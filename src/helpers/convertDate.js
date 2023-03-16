const convertDate = (strDate, locale = 'en', activeText = 'Current') => {
  // Split the input string into year and month components
  const [year, month] = strDate.split('-')

  // Create a new Date object from the year and month components
  const date = new Date(`${year}-${month}`)

  // Check if the input date is later than today's date
  const now = new Date()
  const isActive = date.getTime() > now.getTime()

  if (isActive) {
    return activeText
  }

  // Get the month name from the Date object using the Portuguese locale
  const monthName = date.toLocaleString(locale, { month: 'short' })

  // Return the formatted date string in Portuguese
  return `${monthName} ${year}`
}

export default convertDate
