func generate(numRows int) [][]int {
  ans := [][]int{[]int{1}}
  if numRows == 1 {
    return ans
  }
  ans = append(ans, []int{1, 1})
  for numRows > 2 {
    nextRow, prev := []int{}, ans[len(ans) - 1]
    nextRow = append(nextRow, 1)
    for i := 1; i < len(prev); i++ {
      nextRow = append(nextRow, prev[i - 1] + prev[i])
    }
    nextRow = append(nextRow, 1)
    ans = append(ans, nextRow)
    numRows--
  }
  return ans
}