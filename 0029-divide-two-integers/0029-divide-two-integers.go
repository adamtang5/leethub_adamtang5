func divide(dividend int, divisor int) int {
  d, dv := 0, 0
  if dividend >= 0 {
    d = dividend
  } else {
    d = -dividend
  }
  if divisor >= 0 {
    dv = divisor
  } else {
    dv = -divisor
  }
  output, temp, mul := 0, 0, 0
  for d >= dv {
    temp, mul = dv, 1
    for d >= temp {
      d, output, mul, temp = d-temp, output+mul, mul+mul, temp+temp
    }
  }
  if dividend < 0 && divisor >= 0 || divisor < 0 && dividend >= 0 {
    output = -output
  }
  return min(2147483647, max(-2147483648, output))
}