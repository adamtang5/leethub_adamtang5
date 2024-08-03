func firstMissingPositive(nums []int) int {
  positives := map[int]bool{}
  for _, n := range nums {
    if n > 0 {
      positives[n] = true
    }
  }
  missing := 1
  for true {
    if _, ok := positives[missing]; ok {
      missing++
    } else {
      break
    }
  }
  return missing
}