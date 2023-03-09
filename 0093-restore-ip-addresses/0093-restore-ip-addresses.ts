function restoreIpAddresses(s: string): string[] {
  const ans: string[] = []
  if (s.length < 4 || s.length > 12) return ans
  if (s.length === 4) {
    ans.push(s.split("").join("."))
    return ans
  }
  
  function validOctet(s: string): boolean {
    if (s.length > 3 || s.length < 1) return false
    if (s.length > 1 && s[0] === '0') return false
    if (+s > 255) return false
    return true
  }

  function dfs(s: string, octIdx: number = 3, addr: string = '') {
    if (!s.length) return
    if (s.length > (octIdx + 1) * 3) return
    if (!octIdx && !validOctet(s)) return
    if (validOctet(s) && !octIdx) {
      ans.push(s + addr)
      return
    }
    for (let digits = 1; digits <= Math.min(s.length, 3); digits++) {
      const oct: string = s.slice(s.length - digits)
      if (validOctet(oct)) {
        dfs(s.slice(0, s.length - digits), octIdx - 1, `.${oct}${addr}`)
      }
    }
  }
  
  dfs(s)
  return ans
};