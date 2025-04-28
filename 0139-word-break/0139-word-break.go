func wordBreak(s string, wordDict []string) bool {
  maxWordLen, minWordLen, lenSets, fails := 0, 20, make(map[int]*map[string]bool), make(map[string]bool)

  for _, word := range wordDict {
    maxWordLen, minWordLen = max(maxWordLen, len(word)), min(minWordLen, len(word))
    if _, ok := lenSets[len(word)]; !ok {
      set := make(map[string]bool)
      lenSets[len(word)] = &set
    }
    if set, ok := lenSets[len(word)]; ok {
      (*set)[word] = true
    }
  }
  return dfs(s, &fails, minWordLen, maxWordLen, &lenSets)
}

func dfs(s string, fails *map[string]bool, minWordLen int, maxWordLen int, lenSets *map[int]*map[string]bool) bool {
  if len(s) == 0 {
    return true
  }
  if _, ok := (*fails)[s]; ok {
    return false
  }
  if len(s) < minWordLen {
    (*fails)[s] = true
    return false
  }
  ans := false
  for l := minWordLen; l <= len(s) && l <= maxWordLen; l++ {
    if set, ok := (*lenSets)[l]; ok {
      for word := range *set {
        if strings.HasPrefix(s, word) {
          ans = ans || dfs(s[len(word):], fails, minWordLen, maxWordLen, lenSets)
        }
      }
    }
  }
  if ans == false {
    (*fails)[s] = true
  }
  return ans
}