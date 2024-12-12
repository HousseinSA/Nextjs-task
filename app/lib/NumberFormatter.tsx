export const formatNumber = (num: string) => {
  const number = parseInt(num.replace(/,/g, ""), 10)
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + "M"
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + "K"
  }
  return number.toString()
}
