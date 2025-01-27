func search(nums []int, target int) bool {
  l, r, m := 0, len(nums) - 1, 0
  for l <= r {
    m = (l + r) / 2
    if nums[m] == target {
      return true
    }
    if nums[l] == nums[m] && nums[m] == nums[r] {
      l, r = l + 1, r - 1
    } else if nums[l] <= nums[m] {
      if nums[l] <= target && target < nums[m] {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      if nums[m] < target && target <= nums[r] {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return false
}