func majorityElement(nums []int) int {
  ans := 1000000001
  count := 0
  for _, num := range nums {
    if count == 0 {
      ans = num
      count++
    } else {
      if ans == num {
        count++
      } else {
        count--
      }
    }
  }
  return ans
}