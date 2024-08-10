func lengthOfLastWord(s string) int {
  i, ans := len(s)-1, 0
  for s[i] == []byte(" ")[0] {
    i--
  }
  for i >= 0 && s[i] != []byte(" ")[0] {
    ans, i = ans+1, i-1
  }
  return ans
}