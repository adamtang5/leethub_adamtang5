func permuteUnique(nums []int) [][]int {
  ans := [][]int{}
  if len(nums) == 1 {
    ans = append(ans, nums)
  } else {
    uniqPerms, dupe := map[string]bool{}, [][]int{}
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
      permuted := permuteUnique(clone)
      for _, p := range permuted {
        combined := []int{extracted}
        combined = append(combined, p...)
        dupe = append(dupe, combined)
      }
    }
    for _, d := range dupe {
      dStr := ""
      for _, v := range d {
        if len(dStr) > 0 {
          dStr += ","
        }
        dStr += strconv.Itoa(v)
      }
      _, ok := uniqPerms[dStr]
      if !ok {
        ans = append(ans, d)
        uniqPerms[dStr] = true
      }
    }
  }
  return ans
}