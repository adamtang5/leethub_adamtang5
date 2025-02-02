func isScramble(s1 string, s2 string) bool {
  dp := make(map[string]bool)
  return dfs(s1, s2, &dp)
}

func dfs(s1 string, s2 string, dp *map[string]bool) bool {
  key, ans := s1 + "-" + s2, false
  if v, ok := (*dp)[key]; ok {
    return v
  }
  if len(s1) == 1 {
    ans = s1 == s2
    (*dp)[key] = ans
    return ans
  }
  tally1, tally2 := make([]int, 26), make([]int, 26)
  for i := 0; i < 26; i++ {
    tally1[i] = 0
    tally2[i] = 0
  }
  for i := 0; i < len(s1); i++ {
    tally1[int(s1[i] - 'a')]++
    tally2[int(s2[i] - 'a')]++
  }
  if !slices.Equal(tally1, tally2) {
    (*dp)[key] = false
    return false
  }

  ans = false
  for split := 1; split < len(s1); split++ {
    ans = ans || dfs(s1[:split], s2[:split], dp) && dfs(s1[split:], s2[split:], dp)
    ans = ans || dfs(s1[:split], s2[len(s2) - split:], dp) && dfs(s1[split:], s2[:len(s2) - split], dp)
  }
  (*dp)[key] = ans
  return ans
}