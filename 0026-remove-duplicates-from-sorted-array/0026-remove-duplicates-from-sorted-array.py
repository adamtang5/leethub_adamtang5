class Solution:
  def removeDuplicates(self, nums: List[int]) -> int:
    l, r, initLen = 0, 0, len(nums)
    while r < initLen:
      while r < initLen and nums[r] == nums[l]:
        r += 1
      if r < initLen:
        nums[l+1] = nums[r]
      l += 1
    return l