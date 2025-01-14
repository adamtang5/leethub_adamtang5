func searchMatrix(matrix [][]int, target int) bool {
  r := 0
  for r < len(matrix) - 1 {
    if target >= matrix[r + 1][0] {
      r++
    } else {
      break
    }
  }
  if r == len(matrix) {
    return false
  }
  for c:=0;c<len(matrix[r]);c++ {
    if target == matrix[r][c] {
      return true
    } else if target < matrix[r][c] {
      return false
    }
  }
  return false
}