func subsets(nums []int) [][]int {
  ans := &[][]int{}
  dfs(0, nums, ans, &[]int{})
  return *ans
}

func dfs(i int, nums []int, ans *[][]int, subset *[]int)  {
  if i >= len(nums) {
    cp1 := make([]int, len(*subset))
    copy(cp1, *subset)
    *ans = append(*ans, cp1)
    return
  }

  *subset = append(*subset, nums[i])
  dfs(i + 1, nums, ans, subset)

  cp2 := make([]int, len(*subset) - 1)
  copy(cp2, *subset)
  *subset = cp2
  dfs(i + 1, nums, ans, subset)
}