
export function imageFormat(image, size) {
  return `${image}?param=${size}x${size}`
}

export function unitFormat(number) {
  if (number < 0) return
  if (number < 10000) {
    return number
  } else if (Math.floor(number / 10000) < 10000) {
    return Math.floor(number / 10000) + "万"
  } else {
    return Math.floor(number / 10000000) + "亿"
  }
}