func fullJustify(words []string, maxWidth int) []string {
  leftJustify := func(words []string) string {
    ans := strings.Join(words, " ")
    tail := strings.Repeat(" ", maxWidth - len(ans))
    return ans + tail
  }

  justifyLine := func(words []string) string {
    if len(words) == 1 {
      return leftJustify(words)
    }
    wordsLen := 0
    for _, word := range words {
      wordsLen += len(word)
    }
    spaces, wordsCount, ans := maxWidth - wordsLen, len(words), ""
    for i:=0;i<wordsCount-1;i++ {
      ans += words[i]
      base, leftover := spaces / (wordsCount - 1), 0
      if i < spaces % (wordsCount - 1) {
        leftover = 1
      } else {
        leftover = 0
      }
      ans += strings.Repeat(" ", base + leftover)
    }
    ans += words[len(words) - 1]
    return ans
  }

  lines, l, r, minWidth := []string{}, 0, 0, len(words[0])
  for l < len(words) {
    if minWidth == maxWidth {
      tmp := make([]string, r+1-l)
      copy(tmp, words[l:r+1])
      lines = append(lines, strings.Join(tmp, " "))
      l = r+1
      r = l
      if l < len(words) {
        minWidth = len(words[l])
      } else {
        minWidth = 0
      }
    } else if minWidth > maxWidth {
      minWidth -= len(words[r])
      minWidth--
      r--
      tmp := make([]string, r+1-l)
      copy(tmp, words[l:r+1])
      lines = append(lines, justifyLine(tmp))
      l = r+1
      r = l
      if l < len(words) {
        minWidth = len(words[l])
      } else {
        minWidth = 0
      }
    } else {
      r++
      if r < len(words) {
        minWidth += len(words[r])
        minWidth++
      } else {
        tmp := make([]string, len(words)-l)
        copy(tmp, words[l:])
        lines = append(lines, leftJustify(tmp))
        break
      }
    }
  }
  return lines
}
