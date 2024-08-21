func isMatch(s string, p string) bool {
  parsed, i := []string{}, 0
  for i < len(p) {
    if i+1 < len(p) && p[i+1] == []byte("*")[0] {
      if p[i] != []byte("*")[0] {
        if p[i+1] != []byte(".")[0] && (len(parsed) == 0 || p[i:i+2] != parsed[len(parsed)-1]) {
          parsed = append(parsed, p[i:i+2])
        }
      }
      i+=2
    } else {
      parsed = append(parsed, p[i:i+1])
      i++
    }
  }
  return dfs(s, parsed, map[string]bool{})
}

func charMatch(ch1 byte, ch2 byte) bool {
  return ch2 == []byte(".")[0] || ch2 == ch1
}

func dfs(s string, patterns []string, dp map[string]bool) bool {
  key := s+"-"+strings.Join(patterns, ",")
  
  if len(s) > 0 && len(patterns) == 0 {
    dp[key] = false
    return dp[key]
  }
  if len(s) == 0 && len(patterns) == 0 {
    dp[key] = true
    return dp[key]
  }
  if len(s) == 0 && len(patterns) > 0 {
    ans := true
    for i:=0;i<len(patterns);i++ {
      if len(patterns[i]) != 2 {
        ans = false
        break
      }
    }
    dp[key] = ans
    return ans
  }
  
  var first string
  first, patterns = patterns[0], patterns[1:]
  if len(first) == 1 {
    ans := charMatch(s[0], first[0]) && dfs(s[1:], patterns, dp)
    dp[key] = ans
    return ans
  } else {
    if !charMatch(s[0], first[0]) {
      ans := dfs(s, patterns, dp)
      dp[key] = ans
      return ans
    } else {
      l := 1
      for l < len(s) && (first[0] == []byte(".")[0] || s[l] == s[0]) {
        l++
      }
      ans := false
      for i:=0;i<=l;i++ {
        clone := patterns
        ans = ans || dfs(s[i:], clone, dp)
      }
      dp[key] = ans
      return ans
    }
  }
}