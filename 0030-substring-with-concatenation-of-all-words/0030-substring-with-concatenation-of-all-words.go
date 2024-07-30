func findSubstring(s string, words []string) []int {
  ans, tally := []int{}, map[string]int{}
  for _, word := range words {
    if _, ok := tally[word]; !ok {
      tally[word] = 0
    }
    tally[word]++
  }
  
  start, currWord, j := 0, "", 0
  for offset:=0;offset<len(words[0]);offset++ {
    start = offset
    tallyCopy, currWords := make(map[string]int), []string{}
    for k, v := range tally {
      tallyCopy[k] = v
    }
    for i:=offset;i+len(words[0])<=len(s);i+=len(words[0]) {
      currWord, j = "", 0
      for j<len(words[0]) {
        currWord += s[i+j:i+j+1]
        j++
      }
      start = max(i+j-len(words)*len(words[0]), start)
      currWords = append(currWords, currWord)
      var popped string
      if len(words)+1 > len(currWords) {
        popped = ""
      } else {
        popped = currWords[len(currWords)-len(words)-1]
      }
      if _, ok := tallyCopy[popped]; ok {
        tallyCopy[popped]++
      }
      if _, ok := tallyCopy[currWord]; ok {
        tallyCopy[currWord]--
        allZeroes := true
        for _, v := range tallyCopy {
          if v != 0 {
            allZeroes = false
            break
          }
        }
        if allZeroes {
          ans = append(ans, start)
        }
      }
    }
  }
  return ans
}