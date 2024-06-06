func intToRoman(num int) string {
  ans, base := "", 10
  for num > 0 {
    ans = digitToRoman(num%base, base/10) + ans
    num -= num%base
    base *= 10
  }
  return ans
}

func digitToRoman(val int, mult int) string {
  lookup := map[int]string{
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  }
  
  ans, sig := "", val/mult
  switch sig%5 {
    case 4:
    if sig > 5 {
      ans = ans+lookup[mult]+lookup[mult*10]
    } else {
      ans = ans+lookup[mult]+lookup[mult*5]
    }
    default:
    if sig >= 5 {
      ans += lookup[mult*5]
    }
    ans += strings.Repeat(lookup[mult], sig%5)
  }
  return ans
}