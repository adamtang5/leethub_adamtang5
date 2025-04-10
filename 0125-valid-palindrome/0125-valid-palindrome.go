func isPalindrome(s string) bool {
  s = strings.ToLower(s)
  t := ""
  for i := 0; i < len(s); i++ {
    r := rune(s[i])
    if unicode.IsLetter(r) || unicode.IsDigit(r) {
      t += s[i:i + 1]
    }
  }
  l, r := 0, len(t) - 1
  for l < r {
    if t[l] != t[r] {
      return false
    } else {
      l, r = l + 1, r - 1
    }
  }
  return true
}