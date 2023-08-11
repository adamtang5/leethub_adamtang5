/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rows: Set<number> = new Set()
  const cols: Set<number> = new Set()
  matrix.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell === 0) {
        rows.add(r)
        cols.add(c)
      }
    })
  })

  const rArr: number[] = [...rows]
  const cArr: number[] = [...cols]
  rArr.forEach(r => {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[r][c] = 0
    }
  })
  cArr.forEach(c => {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][c] = 0
    }
  })
}