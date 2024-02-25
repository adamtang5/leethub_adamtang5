class Solution:
  def missingNumber(self, nums: List[int]) -> int:
    numSet = set(nums)
    for n in range(len(nums)+1):
      if n not in numSet:
        return n