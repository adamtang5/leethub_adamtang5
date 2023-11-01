class Solution:
  def maxProduct(self, nums: List[int]) -> int:
    ans = max(nums)
    currMin, currMax, temp = 1, 1, None
    for n in nums:
      temp = currMax
      currMax = max(currMin * n, temp * n, n)
      currMin = min(currMin * n, temp * n, n)
      ans = max(currMax, currMin, ans)
    return ans