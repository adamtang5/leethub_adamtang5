function longestPalindrome(s: string): string {
  if (s.length < 2) return s
  
  let maxLength = 1
  let maxSub: string = s[0]
  let l: number
  let r: number
  
  for (let i = 0; i < s.length; i++) {
    // odd
    l = i
    r = i
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxLength) {
        maxLength = r - l + 1
        maxSub = s.slice(l, r + 1)
      }
      l--
      r++
    }
    
    // even
    l = i
    r = i + 1
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxLength) {
        maxLength = r - l + 1
        maxSub = s.slice(l, r + 1)
      }
      l--
      r++
    }
  }
  return maxSub
};