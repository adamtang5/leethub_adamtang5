func candy(ratings []int) int {
  ans := make([]int, len(ratings))
  for i := 0; i < len(ans); i++ {
    ans[i] = 1
  }
  for i := 0; i < len(ratings) - 1; i++ {
    if ratings[i + 1] > ratings[i] {
      ans[i + 1] = ans[i] + 1
    }
  }
  for i := len(ratings) - 1; i >= 1; i-- {
    if ratings[i - 1] > ratings[i] {
      ans[i - 1] = max(ans[i - 1], ans[i] + 1)
    }
  }
  out := 0
  for i := 0; i < len(ans); i++ {
    out += ans[i]
  }
  return out
}