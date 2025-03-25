func numDistinct(s string, t string) int {
  tChars, newS := make(map[byte]bool), ""
  for i := 0; i < len(t); i++ {
    tChars[t[i]] = true
  }
  for i := 0; i < len(s); i++ {
    if _, ok := tChars[s[i]]; ok {
      newS += s[i:i + 1]
    }
  }
  if len(newS) == 0 {
    return 0
  }

  left, right := 0, len(newS)
  for left < len(newS) && newS[left] != t[0] {
    left++
  }
  for right > 0 && newS[right - 1] != t[len(t) - 1] {
    right--
  }
  if right < left {
    return 0
  }
  s = newS[left:right]
  if len(s) == 0 {
    return 0
  }
  if s == t {
    return 1
  }

  dp := make([][]int, len(s))
  for i := range dp {
    dp[i] = make([]int, len(t))
  }

  for l := 0; l < len(s); l++ {
    if s[l] == t[0] {
      dp[l][0]++
    }
  }

  for r := 0; r < len(t) - 1; r++ {
    for l := r; l < len(s); l++ {
      if dp[l][r] > 0 {
        for i := l + 1; i < len(s); i++ {
          if s[i] == t[r + 1] {
            dp[i][r + 1] += dp[l][r]
          }
        }
      }
    }
  }

  ans := 0
  for _, row := range dp {
    ans += row[len(t) - 1]
  }
  return ans
}