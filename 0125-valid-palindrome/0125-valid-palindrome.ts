function isPalindrome(s: string): boolean {
  const re: RegExp = /[^a-z0-9]/g
  s = s.toLowerCase().replace(re, '')
  let l = 0
  let r = s.length - 1
  while (l < r) {
    if (s[l] !== s[r]) {
      return false
    } else {
      l++
      r--
    }
  }
  return true
}