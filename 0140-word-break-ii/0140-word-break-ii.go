func wordBreak(s string, wordDict []string) []string {
  maxWordLen, minWordLen, lenSets := 0, 20, make(map[int]*map[string]bool)
  for _, word := range wordDict {
    maxWordLen, minWordLen = max(maxWordLen, len(word)), min(minWordLen, len(word))
    if _, ok := lenSets[len(word)]; !ok {
      newSet := make(map[string]bool)
      lenSets[len(word)] = &newSet
    }
    (*lenSets[len(word)])[word] = true
  }

  parents, start, clone := make(map[int]*map[int]bool), 0, strings.Clone(s)
  for start < len(s) {
    for l := minWordLen; l <= len(clone) && l <= maxWordLen; l++ {
      if _, ok := lenSets[l]; ok {
        for word := range *lenSets[l] {
          if strings.HasPrefix(clone, word) {
            if _, ok1 := parents[start + len(word)]; !ok1 {
              newSet := make(map[int]bool)
              parents[start + len(word)] = &newSet
            }
            (*parents[start + len(word)])[start] = true
          }
        }
      }
    }
    clone = clone[1:]
    start++
  }
  ans := &[]string{}
  build(len(s), &[]string{}, s, ans, &parents)
  return *ans
}

func build(curr int, currWords *[]string, s string, ans *[]string, parents *map[int]*map[int]bool)  {
  if curr == 0 {
    *ans = append(*ans, strings.Join(*currWords, " "))
    return
  }
  if _, ok := (*parents)[curr]; !ok {
    return
  } else {
    for parent := range *(*parents)[curr] {
      newWords := []string{s[parent:curr]}
      for _, word := range *currWords {
        newWords = append(newWords, word)
      }
      build(parent, &newWords, s, ans, parents)
    }
  }
}