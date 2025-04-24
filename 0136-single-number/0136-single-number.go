func singleNumber(nums []int) int {
  tally, ans := make(map[int]bool), 0
  for _, num := range nums {
    if _, ok := tally[num]; ok {
      delete(tally, num)
    } else {
      tally[num] = true
    }
  }
  for num := range tally {
    ans = num
    break
  }
  return ans
}