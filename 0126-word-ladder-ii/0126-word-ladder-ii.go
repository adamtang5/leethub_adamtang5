func findLadders(beginWord string, endWord string, wordList []string) [][]string {
  layers, init := []*map[string]bool{}, make(map[string]bool)
  init[beginWord] = true
  layers = append(layers, &init)

  visited, wordSet := make(map[string]bool), make(map[string]bool)
  visited[beginWord] = true
  for _, word := range wordList {
    wordSet[word] = true
  }

  parents := make(map[string]*map[string]bool)

  _, ok := visited[endWord]
  for !ok && len(*layers[len(layers) - 1]) > 0 {
    currLayer := layers[len(layers) - 1]
    newLayer := make(map[string]bool)
    layers = append(layers, &newLayer)
    for currWord := range *currLayer {
      for j := 0; j < len(currWord); j++ {
        for c := "a"[0]; c <= "z"[0]; c++ {
          nextWord := currWord[:j] + string(c) + currWord[j + 1:]
          _, ok1 := wordSet[nextWord]
          _, ok2 := visited[nextWord]
          if nextWord != currWord && ok1 && !ok2 {
            nextLayer := layers[len(layers) - 1]
            (*nextLayer)[nextWord] = true
            if _, ok3 := parents[nextWord]; !ok3 {
              nextParent := make(map[string]bool)
              parents[nextWord] = &nextParent
            }
            (*parents[nextWord])[currWord] = true
          }
        }
      }
    }
    for word := range *layers[len(layers) - 1] {
      visited[word] = true
    }
  }
  if _, ok := visited[endWord]; !ok {
    return [][]string{}
  }
  paths := [][]string{[]string{endWord}}
  return backtrack(&paths, beginWord, &parents)
}

func backtrack(paths *[][]string, beginWord string, parents *map[string]*map[string]bool) [][]string {
  ans := [][]string{}
  if (*paths)[0][0] == beginWord {
    for _, path := range *paths {
      if path[0] == beginWord {
        ans = append(ans, path)
      }
    }
    return ans
  }
  for _, path := range *paths {
    parentSet, ok := (*parents)[path[0]]
    if ok {
      for parent := range *parentSet {
        next := []string{parent}
        for _, word := range path {
          next = append(next, word)
        }
        ans = append(ans, next)
      }
    }
  }
  return backtrack(&ans, beginWord, parents)
}