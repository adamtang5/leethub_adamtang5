function searchMatrix(matrix: number[][], target: number): boolean {
  let r = 0
  while (r < matrix.length - 1) {
    if (target >= matrix[r + 1][0]) {
      r++
    } else {
      break
    }
  }
  if (r === matrix.length) return false
  for (let c = 0; c < matrix[r].length; c++) {
    if (target === matrix[r][c]) {
      return true
    } else if (target < matrix[r][c]) {
      return false
    }
  }
  if (target > matrix[r].at(-1)) return false
}