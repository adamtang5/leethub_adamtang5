func myAtoi(s string) int {
  s = strings.TrimSpace(s)
  sign := 1
  if len(s) < 1 {
    return 0
  }
  if s[0:1] == "-" {
    sign = -1
  }
  if strings.Contains("+-", s[0:1]) {
    s = s[1:]
  }
  
  r, _ := regexp.Compile("^\\d+")
  if !r.MatchString(s) {
    return 0
  }
  ans, err := strconv.Atoi(r.FindString(s))
  if err != nil {
    if sign > 0 {
      return 2147483647
    } else {
      return -2147483648
    }
  } else {
    ans *= sign
    if ans < 0 {
      return max(ans, -2147483648)
    } else {
      return min(ans, 2147483647)
    }
  }
}