func addBinary(a string, b string) string {
  ans, carry, l, r := "", 0, 0, 0
  for i:=0;i<max(len(a), len(b));i++ {
    if i < len(a) && int(a[len(a)-i-1]) == int('1') {
      l = 1
    } else {
      l = 0
    }
    if i < len(b) && int(b[len(b)-i-1]) == int('1') {
      r = 1
    } else {
      r = 0
    }
    ans = strconv.Itoa(l ^ r ^ carry) + ans
    carry = l & r | l & carry | r & carry
  }
  if carry > 0 {
    ans = strconv.Itoa(carry) + ans
  }
  return ans
}