func minimumTotal(triangle [][]int) int {
  level, left, right, res, ans := 0, 0, 0, 0, 10000000
  for level < len(triangle) - 1 {
    level++
    for i := 0; i <= level; i++ {
      if i - 1 < 0 {
        left = 10000000
      } else {
        left = triangle[level - 1][i - 1]
      }
      if i >= level {
        right = 10000000
      } else {
        right = triangle[level - 1][i]
      }
      res = triangle[level][i] + min(left, right)
      triangle[level][i] = res
    }
  }
  for _, v := range triangle[level] {
    if v < ans {
      ans = v
    }
  }
  return ans
}