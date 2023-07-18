class Solution:
  def maxSubArray(self, nums: List[int]) -> int:
    prevMax = currMax = ans = float('-Inf')
    for n in nums:
      prevMax = currMax
      currMax = max(n, n+prevMax)
      ans = max(ans, currMax)
    return ans