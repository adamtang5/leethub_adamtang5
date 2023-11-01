function titleToNumber(columnTitle: string): number {
  const codes: number[] = []
  for (let i = 0; i < columnTitle.length; i++) {
    codes.push(columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1)
  }
  let n = 0
  let ans = 0
  let popped: number
  while (codes.length) {
    popped = codes.pop()
    ans += popped * 26 ** n++
  }
  return ans
}