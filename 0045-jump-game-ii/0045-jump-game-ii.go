func jump(nums []int) int {
  ans, l, r, ub := 0, 0, 0, 0
  for r < len(nums)-1 {
    for i:=l;i<=r;i++ {
      ub = max(ub, i+nums[i])
    }
    l, r, ans = r+1, ub, ans+1
  }
  return ans
}