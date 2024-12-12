export const formatNumber = (num: string) => {
  const number = parseInt(num.replace(/,/g, ""), 10)
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + "M"
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + "K"
  }
  return number.toString()
}

export const formatVideoLength = (lengthText: string): string => {
  const parts = lengthText.split(":").map(Number)
  const hours = parts.length === 3 ? parts[0] : 0
  const minutes = parts.length >= 2 ? parts[parts.length - 2] : 0
  const seconds = parts[parts.length - 1] || 0

  return [
    hours && `${hours}h`,
    minutes && `${minutes} min`,
    seconds && `${seconds} sec`,
  ]
    .filter(Boolean)
    .join(", ")
}
