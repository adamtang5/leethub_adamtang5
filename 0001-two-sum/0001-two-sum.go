func twoSum(nums []int, target int) []int {
  indices := make(map[int]int)
  ans := []int{0, 0}
  for i:=0;i<len(nums);i++ {
    idx, ok := indices[nums[i]]
    if ok {
      ans[0] = idx
      ans[1] = i
      break
    } else {
      indices[target-nums[i]] = i
    }
  }
  return ans
}