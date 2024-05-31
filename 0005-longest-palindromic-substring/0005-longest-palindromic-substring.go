func longestPalindrome(s string) string {
  if len(s) < 2 {
    return s
  }
  s = "$" + s + "@"
  s = strings.Join(strings.Split(s, ""), "#")
  var pExt = make([]int, len(s))
  ctr, r, mir := 0, 0, 0
  for i := 0; i < len(s)-1; i++ {
    mir = 2*ctr-i
    if i < r {
      pExt[i] = min(r-i, pExt[mir])
    }
    for i-pExt[i]-1 >= 0 && i+pExt[i]+1 < len(s) && s[i-pExt[i]-1] == s[i+pExt[i]+1] {
      pExt[i]++
    }
    if pExt[i]+1 > r {
      ctr = i
      r = pExt[i]+1
    }
  }
  maxExt := slices.Max(pExt)
  ctr = slices.Index(pExt, maxExt)
  return strings.ReplaceAll(s[ctr-maxExt:ctr+maxExt+1], "#", "")
}