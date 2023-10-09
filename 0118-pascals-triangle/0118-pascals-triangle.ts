function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]]
  const ans: number[][] = [[1], [1, 1]]
  while (numRows > 2) {
    const next: number[] = []
    const prev: number[] = ans.at(-1)
    next.push(1)
    for (let i = 1; i < prev.length; i++) {
      next.push(prev[i - 1] + prev[i])
    }
    next.push(1)
    ans.push(next)
    numRows--
  }
  return ans
}