func removeElement(nums []int, val int) int {
  l, r := 0, len(nums)-1
  for l <= r {
    for l < len(nums) && nums[l] != val {
      l++
    }
    for r >= 0 && nums[r] == val {
      r--
    }
    if l < r {
      nums[l], nums[r] = nums[r], nums[l]
    }
  }
  return l
}