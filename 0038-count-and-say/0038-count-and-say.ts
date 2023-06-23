function countAndSay(n: number): string {
  if (n === 1) return '1'
  
  function convert(s: string): string {
    let [ans, currCh, currLen, i] = ['', '', 0, 0]
    while (i < s.length) {
      if (s[i] === currCh) {
        currLen++
      } else {
        if (currLen) {
          ans += currLen.toString()
          ans += currCh
        }
        currCh = s[i]
        currLen = 1
      }
      i++
    }
    if (currLen) {
      ans += currLen.toString()
      ans += currCh
    }
    return ans
  }
  
  return convert(countAndSay(n - 1))
}