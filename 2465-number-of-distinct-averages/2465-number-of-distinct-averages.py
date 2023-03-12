class Solution:
  def distinctAverages(self, nums: List[int]) -> int:
    nums.sort()
    avgs = set()
    l, r = 0, len(nums)-1
    while (l < r):
      avgs.add((nums[l]+nums[r])/2)
      l += 1
      r -= 1
    return len(avgs)