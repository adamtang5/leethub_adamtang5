class Solution:
  def jump(self, nums: List[int]) -> int:
    ans = l = r = ub = 0
    while r < len(nums)-1:
      for i in range(l, r+1):
        ub = max(ub, i+nums[i])
      l = r+1
      r = ub
      ans += 1
    return ans