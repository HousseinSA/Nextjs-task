export const formatNumber = (num: string | number) => {
  const number =
    typeof num === "string" ? parseInt(num.replace(/,/g, ""), 10) : num

  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + "M"
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + "K"
  }

  return number.toString()
}

export const formatVideoLength = (lengthSeconds: number): string => {
  const hours = Math.floor(lengthSeconds / 3600)
  const minutes = Math.floor((lengthSeconds % 3600) / 60)
  const seconds = lengthSeconds % 60

  return [
    hours > 0 ? `${hours}h` : null,
    minutes > 0 ? `${minutes} min` : null,
    seconds > 0 ? `${seconds} sec` : null,
  ]
    .filter(Boolean)
    .join(", ")
}
