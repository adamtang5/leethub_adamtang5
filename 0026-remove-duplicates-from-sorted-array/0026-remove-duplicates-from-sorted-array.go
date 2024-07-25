func removeDuplicates(nums []int) int {
  length, l, r := len(nums), 0, 0
  for r < length {
    for r < length && nums[r] == nums[l] {
      r++
    }
    if r < length {
      nums[l+1] = nums[r]
    }
    l++
  }
  return l
}