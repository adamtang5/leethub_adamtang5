func lengthOfLongestSubstring(s string) int {
  if len(s) == 0 {
    return 0
  }
  sub, max := "", 0
  for i := 0; i < len(s); i++ {
    if strings.Contains(sub, string(s[i])) {
      sub = sub[strings.Index(sub, string(s[i]))+1:] + string(s[i])
    } else {
      sub += string(s[i])
    }
    if len(sub) > max {
      max = len(sub)
    }
  }
  return max
}