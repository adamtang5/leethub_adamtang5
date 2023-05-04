function isPalindrome(x: number): boolean {
  if (x < 0) return false
  if (x < 10) return true
  
  const s: string = x.toString(10)
  let [l, r] = [0, s.length - 1]
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