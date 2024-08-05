func isMatch(s string, p string) bool {
  if len(p) == 0 {
    return len(s) == 0
  }
  t := ""
  for i:=0;i<len(p);i++ {
    if p[i] == []byte("*")[0] {
      for i < len(p)-1 && p[i+1] == []byte("*")[0] {
        i++
      }
    }
    t += p[i:i+1]
  }
  p = t
  i := 0
  if p[i] != []byte("*")[0] {
    for i < len(p) && p[i] != []byte("*")[0] {
      if i >= len(s) {
        return false
      }
      if !charMatch(s[i], p[i]) {
        return false
      }
      i++
    }
    s, p = s[i:], p[i:]
  }
  if len(p) == 0 {
    return len(s) == 0
  }
  i = 0
  if p[len(p)-i-1] != []byte("*")[0] {
    for i < len(p) && p[len(p)-i-1] != []byte("*")[0] {
      if i >= len(s) {
        return false
      }
      if !charMatch(s[len(s)-i-1], p[len(p)-i-1]) {
        return false
      }
      i++
    }
    s, p = s[:len(s)-i], p[:len(p)-i]
  }
  if p == "*" {
    return true
  }
  return parse(s, strings.Split(p[1:len(p)-1], "*"))
}

func charMatch(ch1 byte, ch2 byte) bool {
  return ch2 == []byte("?")[0] || ch2 == ch1
}

func parse(s string, chunks []string) bool {
  if len(chunks) == 0 {
    return true
  }
  start, cIdx, j := 0, 0, 1
  for cIdx < len(chunks) && start < len(s) {
    for start < len(s) && !charMatch(s[start], chunks[cIdx][0]) {
      start++
    }
    if start == len(s) {
      break
    }
    j = 1
    for j < len(chunks[cIdx]) && start+j < len(s) && charMatch(s[start+j], chunks[cIdx][j]) {
      j++
    }
    if j == len(chunks[cIdx]) {
      cIdx++
      start += j
    } else {
      start++
    }
  }
  return cIdx == len(chunks)
}