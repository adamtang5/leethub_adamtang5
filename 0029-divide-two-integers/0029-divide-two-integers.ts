function divide(dividend: number, divisor: number): number {
  let d: number = Math.abs(dividend)
  const dv: number = Math.abs(divisor)
  let output = 0
  let temp: number
  let mul: number
  while (d >= dv) {
    [temp, mul] = [dv, 1]
    while (d >= temp) {
      d -= temp
      output += mul
      mul += mul
      temp += temp
    }
  }
  if (dividend < 0 && divisor >= 0 || divisor < 0 && dividend >= 0) {
    output = 0 - output
  }
  return Math.min(2147483647, Math.max(-2147483648, output))
}