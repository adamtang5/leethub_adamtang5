func ladderLength(beginWord string, endWord string, wordList []string) int {
  if !slices.Contains(wordList, endWord) {
    return 0
  }
  patterns, temp := make(map[string]*[]string), []string{beginWord}
  for _, word := range wordList {
    temp = append(temp, word)
  }
  for _, word := range temp {
    getPatterns(word, &patterns)
  }
  pathQ, visited, ans := [][]string{[]string{beginWord}}, make(map[string]bool), 0
  visited[beginWord] = true
  var currPath *[]string
  var currNode string
  for len(pathQ) > 0 {
    currPath = &pathQ[0]
    pathQ = pathQ[1:]
    currNode = (*currPath)[len(*currPath) - 1]
    if currNode == endWord {
      ans = len(*currPath)
      break
    }
    for i := 0; i < len(currNode); i++ {
      key := currNode[:i] + "*" + currNode[i + 1:]
      if neighbors, ok := patterns[key]; ok {
        for _, nb := range *neighbors {
          _, ok1 := visited[nb]
          if nb != currNode && !ok1 {
            visited[nb] = true
            next := []string{}
            for _, word := range *currPath {
              next = append(next, word)
            }
            next = append(next, nb)
            pathQ = append(pathQ, next)
          }
        }
      }
    }
  }
  return ans
}

func getPatterns(word string, patterns *map[string]*[]string)  {
  for i := 0; i < len(word); i++ {
    key := word[:i] + "*" + word[i + 1:]
    if _, ok := (*patterns)[key]; !ok {
      (*patterns)[key] = &[]string{}
    }
    words, ok := (*patterns)[key]
    if ok {
      *words = append(*words, word)
    }
  }
}