func isPalindrome(x int) bool {
  if x < 0 {
    return false
  }
  if x < 10 {
    return true
  }
  s := strconv.Itoa(x)
  l, r := 0, len(s)-1
  for l < r {
    if s[l] != s[r] {
      return false
    } else {
      l++
      r--
    }
  }
  return true
}