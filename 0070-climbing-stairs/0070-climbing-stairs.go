func climbStairs(n int) int {
  if n <= 2 {
    return n
  }
  l, r, temp := 1, 2, 0
  for n > 2 {
    temp = r + l
    l = r
    r = temp
    n--
  }
  return r
}