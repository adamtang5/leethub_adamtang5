function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) return [1]
  const ans: number[] = []
  const prevRow: number[] = getRow(rowIndex - 1)
  let l: number
  let r: number
  for (let i = 0; i <= prevRow.length; i++) {
    l = prevRow[i - 1] || 0
    r = prevRow[i] || 0
    ans.push(l + r)
  }
  return ans
}