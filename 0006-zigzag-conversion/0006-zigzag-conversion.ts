function convert(s: string, numRows: number): string {
  if (numRows === 1) return s
  const rows: string[] = new Array(numRows).fill('')
  const newBase: number = (numRows - 1) * 2
  for (let i = 0; i < s.length; i++) {
    const iMod = i % newBase
    const newIdxMod = iMod <= newBase / 2 ? iMod : newBase - iMod
    rows[newIdxMod] += s[i]
  }
  return rows.join('')
}