func permute(nums []int) [][]int {
  ans := [][]int{}
  if len(nums) == 1 {
    ans = append(ans, nums)
  } else {
    for i:=0;i<len(nums);i++ {
      clone, extracted := make([]int, len(nums)-1), 0
      for j:=0;j<len(nums);j++ {
        if j < i {
          clone[j] = nums[j]
        } else if j == i {
          extracted = nums[j]
        } else {
          clone[j-1] = nums[j]
        }
      }
      permuted := permute(clone)
      for _, p := range permuted {
        combined := []int{extracted}
        combined = append(combined, p...)
        ans = append(ans, combined)
      }
    }
  }
  return ans
}