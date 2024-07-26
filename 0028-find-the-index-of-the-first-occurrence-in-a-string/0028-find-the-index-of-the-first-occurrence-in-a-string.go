func strStr(haystack string, needle string) int {
  l, j, lenDiff, lChar, rChar := 0, 0, len(haystack)-len(needle), haystack[0], haystack[0]
  for l <= lenDiff {
    lChar, rChar = haystack[l], needle[0]
    for l <= lenDiff && lChar != rChar {
      l++
      if l < len(haystack) {
        lChar = haystack[l]
      }
    }
    if l > lenDiff {
      break
    }
    j, lChar, rChar = 0, haystack[l+j], needle[j]
    for j < len(needle) && lChar == rChar {
      j++
      if j < len(needle) {
        lChar, rChar = haystack[l+j], needle[j]
      }
    }
    if j == len(needle) {
      return l
    } else {
      l++
    }
  }
  return -1
}