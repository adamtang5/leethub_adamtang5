class Solution:
  def findPeakElement(self, nums: List[int]) -> int:
    if len(nums) == 1: return 0
    l, r, m = 0, len(nums)-1, None
    if nums[l+1] < nums[l]: return l
    if nums[r-1] < nums[r]: return r
    while l < r:
      m = (l+r)//2
      if nums[m] > nums[m-1] and nums[m] > nums[m+1]:
        return m
      elif nums[m] < nums[m-1]:
        r = m
      else:
        l = m