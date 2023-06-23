function countAndSay(n: number): string {
  if (n === 1) return '1'
  
  function convert(s: string): string {
    let [ans, currCh, currLen] = ['', '', 0]
    for (let i = 0; i < s.length; i++) {
      if (s[i] === currCh) {
        currLen++
      } else {
        if (currLen) ans += currLen.toString() + currCh
        currCh = s[i]
        currLen = 1
      }
    }
    if (currLen) ans += currLen.toString() + currCh
    return ans
  }
  
  return convert(countAndSay(n - 1))
}