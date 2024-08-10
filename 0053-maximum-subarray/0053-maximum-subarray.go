func maxSubArray(nums []int) int {
  prevMax, currMax, ans := -10001, -10001, -10001
  for _, n := range nums {
    prevMax = currMax
    currMax = max(n, n+prevMax)
    ans = max(ans, currMax)
  }
  return ans
}