func minWindow(s string, t string) string {
  tTally, window := make(map[byte]int), make(map[byte]int)
  for i:=0;i<len(t);i++ {
    tTally[t[i]]++
  }
  have, need, lb, ub, l := 0, len(tTally), -1, len(s) + 1, 0
  for r:=0;r<len(s);r++ {
    if _, ok := tTally[s[r]]; ok {
      window[s[r]]++
      if window[s[r]] == tTally[s[r]] {
        have++
      }
      for have == need {
        if r + 1 - l < ub - lb {
          lb, ub = l, r + 1
        }
        if _, ok = tTally[s[l]]; ok {
          window[s[l]]--
          if window[s[l]] < tTally[s[l]] {
            have--
          }
        }
        l++
      }
    }
  }
  if lb < 0 {
    return ""
  } else {
    return s[lb:ub]
  }
}