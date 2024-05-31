func longestPalindrome(s string) string {
  if len(s) < 2 {
    return s
  }
  maxLen, maxSub, l, r := 1, s[:1], 0, 0
  
  for i := 0; i < len(s); i++ {
    // odd
    l, r = i, i
    for l >= 0 && r < len(s) && s[l:l+1] == s[r:r+1] {
      if r-l+1 > maxLen {
        maxLen = r-l+1
        maxSub = s[l:r+1]
      }
      l--
      r++
    }
    
    //even
    l, r = i, i+1
    for l >= 0 && r < len(s) && s[l:l+1] == s[r:r+1] {
      if r-l+1 > maxLen {
        maxLen = r-l+1
        maxSub = s[l:r+1]
      }
      l--
      r++
    }
  }
  return maxSub
}