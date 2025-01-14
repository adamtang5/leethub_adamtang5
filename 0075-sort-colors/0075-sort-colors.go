func sortColors(nums []int)  {
  tally := [3]int{0, 0, 0}
  for _, n := range nums {
    tally[n]++
  }
  n, i := 0, 0
  for i < len(nums) {
    if tally[n] > 0 {
      nums[i] = n
      tally[n]--
      i++
    } else {
      n++
    }
  }
}