func longestCommonPrefix(strs []string) string {
  ans, minLen := "", 201
  for _, s := range strs {
    if len(s) < minLen {
      minLen = len(s)
    }
  }
  for i := 0; i < minLen; i++ {
    if test(strs, i) {
      ans += strs[0][i:i+1]
    } else {
      break
    }
  }
  return ans
}

func test(strs []string, i int) bool {
  ch := strs[0][i:i+1]
  for _, str := range strs {
    if str[i:i+1] != ch {
      return false
    }
  }
  return true
}