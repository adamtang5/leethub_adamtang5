function maximalRectangle(matrix: string[][]): number {
  const h: number[][] = new Array(matrix.length).fill([]).map(_ => new Array(matrix[0].length).fill(0))
  const v: number[][] = new Array(matrix.length).fill([]).map(_ => new Array(matrix[0].length).fill(0))
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      h[r][c] = +matrix[r][c]
      v[r][c] = +matrix[r][c]
    }
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = matrix[0].length - 2; c >= 0; c--) {
      if (h[r][c] > 0) h[r][c] = h[r][c + 1] + 1
    }
  }
  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = matrix.length - 2; r >= 0; r--) {
      if (v[r][c] > 0) v[r][c] = v[r + 1][c] + 1
    }
  }
  let ans = 0
  let ht = 0
  let wd = 0
  const thSet: Set<number> = new Set()
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      thSet.clear()
      if (h[r][c] && v[r][c]) {
        for (let j = 0; j < h[r][c]; j++) thSet.add(v[r][c + j])
        for (let th of thSet) {
          wd = 0
          while (wd < h[r][c] && v[r][c + wd] >= th) wd++
          ans = Math.max(ans, wd * th)
        }
        thSet.clear()
        for (let i = 0; i < v[r][c]; i++) thSet.add(h[r + i][c])
        for (let th of thSet) {
          ht = 0
          while (ht < v[r][c] && h[r + ht][c] >= th) ht++
          ans = Math.max(ans, ht * th)
        }
        thSet.clear()
      }
    }
  }
  return ans
}