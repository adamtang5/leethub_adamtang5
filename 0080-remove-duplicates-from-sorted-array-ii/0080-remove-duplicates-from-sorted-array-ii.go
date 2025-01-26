func removeDuplicates(nums []int) int {
  l, r := -1, 0
  for r < len(nums) {
    if r + 1 < len(nums) && nums[r] == nums[r + 1] {
      nums[l + 1], nums[l + 2] = nums[r], nums[r + 1]
      l, r = l + 2, r + 1
      for r < len(nums) && nums[r - 1] == nums[r] {
        r++
      }
    } else {
      nums[l + 1] = nums[r]
      l, r = l + 1, r + 1
    }
    if r == len(nums) {
      break
    }
  }
  return l + 1
}