func removeElement(nums []int, val int) int {
  behind, ahead := 0, 0
  for ahead < len(nums) {
    for ahead < len(nums) && nums[ahead] == val {
      ahead++
    }
    for ahead < len(nums) && nums[ahead] != val {
      nums[behind] = nums[ahead]
      behind++
      ahead++
    }
  }
  return behind
}