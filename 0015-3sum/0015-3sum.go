func threeSum(nums []int) [][]int {
  ans := make([][]int, 0)
  sort.Ints(nums)
  i, l, r := 0, 0, 0
  for i < len(nums)-2 {
    l, r = i+1, len(nums)-1
    for l < r {
      if nums[i]+nums[l]+nums[r] < 0 {
        l++
      } else if nums[i]+nums[l]+nums[r] > 0 {
        r--
      } else {
        combo := []int{nums[i], nums[l], nums[r]}
        ans = append(ans, combo)
        for l < len(nums)-1 && nums[l] == nums[l+1] {
          l++
        }
        if l < len(nums)-1 {
          l++
        }
      }
    }
    for i < len(nums)-1 && nums[i] == nums[i+1] {
      i++
    }
    if i < len(nums)-1 {
      i++
    }
  }
  
  return ans
}