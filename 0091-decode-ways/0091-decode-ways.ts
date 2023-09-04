function numDecodings(s: string): number {
  function valid(segment: string): boolean {
    if (segment.length === 1) return segment !== '0'
    if (segment.length === 2) {
      if (segment[0] === '1') {
        return true
      } else if (segment[0] === '2') {
        return segment[1] <= '6'
      } else {
        return false
      }
    }
    return true
  }
  
  if (s.length === 1) return valid(s) ? 1 : 0
  
  function partition(str: string): string[] {
    const ans: string[] = []
    let curr: string = str[0]
    let lBit: string = str[0]
    let rBit: string = str[1]
    let l = 0
    let r = 1
    let double: string = lBit + rBit
    while (r < str.length) {
      if (!valid(double)) {
        ans.push(curr)
        curr = rBit
      } else if (!valid(rBit)) {
        curr = curr.slice(0, -1)
        if (curr) ans.push(curr)
        curr = double
      } else {
        curr += rBit
      }
      l++
      lBit = str[l]
      r++
      if (r < str.length) {
        rBit = str[r]
        double = lBit + rBit
      }
    }
    ans.push(curr)
    return ans
  }
  
  function fib(n: number): number {
    if (n < 2) return 1
    let l = 1
    let r = 1
    while (n >= 2) {
      [l, r] = [r, l + r]
      n--
    }
    return r
  }
  
  const segments:string[] = partition(s)
  if (segments.some(segment => !valid(segment))) return 0
  let prod = 1
  segments.forEach(segment => {
    if (!(segment.includes('0'))) prod *= fib(segment.length)
  })
  return prod
}