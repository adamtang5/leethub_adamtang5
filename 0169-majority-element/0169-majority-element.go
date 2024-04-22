func majorityElement(nums []int) int {
  ans := 0
  tally := make(map[int]int)
  for _, num := range nums {
    tally[num]++
    if 2*tally[num] >= len(nums) {
      ans = num
      break
    }
  }
  return ans
}