func canJump(nums []int) bool {
  i, reach := 0, nums[0]
  for i < reach {
    if reach >= len(nums)-1 {
      return true
    } else {
      i++
      reach = max(i+nums[i], reach)
    }
  }
  return reach >= len(nums)-1
}