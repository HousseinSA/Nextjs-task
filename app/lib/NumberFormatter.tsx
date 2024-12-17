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

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  } else {
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }
}


export const timeAgo = (uploadDate: string) => {
  const date = new Date(uploadDate)
  const now = new Date()
  const seconds = Math.floor((now - date) / 1000)

  const intervals = [
    { label: "year", value: 31536000 }, // 60 * 60 * 24 * 365
    { label: "month", value: 2592000 }, // 60 * 60 * 24 * 30
    { label: "day", value: 86400 }, // 60 * 60 * 24
    { label: "hour", value: 3600 }, // 60 * 60
    { label: "minute", value: 60 }, // 60
  ]

  for (const { label, value } of intervals) {
    const count = Math.floor(seconds / value)
    if (count >= 1) {
      return `${count} ${label}${count > 1 ? "s" : ""} ago`
    }
  }

  return `${seconds} second${seconds === 1 ? "" : "s"} ago`
}
