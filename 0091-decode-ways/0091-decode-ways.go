func numDecodings(s string) int {
  if len(s) == 1 {
    if valid(s) {
      return 1
    } else {
      return 0
    }
  }
  segments := part(s)
  for _, seg := range segments {
    if !valid(seg) {
      return 0
    }
  }
  prod := 1
  for _, seg := range segments {
    if !strings.Contains(seg, "0") {
      prod *= fib(len(seg))
    }
  }
  return prod
}

func valid(seg string) bool {
  if len(seg) == 1 {
    return seg != "0"
  }
  if len(seg) == 2 {
    if seg[0] == ("1")[0] {
      return true
    } else if seg[0] == "2"[0] {
      return seg[1] <= "6"[0]
    } else {
      return false
    }
  }
  return true
}

func part(s string) []string {
  ans, curr, lBit, rBit, l, r := []string{}, s[0:1], s[0:1], s[1:2], 0, 1
  dub := lBit + rBit
  for r < len(s) {
    if !valid(dub) {
      ans = append(ans, curr)
      curr = rBit
    } else if !valid(rBit) {
      curr = curr[:len(curr) - 1]
      if len(curr) > 0 {
        ans = append(ans, curr)
      }
      curr = dub
    } else {
      curr += rBit
    }
    l++
    lBit = s[l:l + 1]
    r++
    if r < len(s) {
      rBit = s[r:r + 1]
      dub = lBit + rBit
    }
  }
  ans = append(ans, curr)
  return ans
}

func fib(n int) int {
  if n < 2 {
    return 1
  }
  l, r := 1, 1
  for n >= 2 {
    l, r = r, l + r
    n--
  }
  return r
}