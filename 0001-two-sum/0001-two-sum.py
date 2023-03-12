class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    indices = {}
    for i in range(len(nums)):
      if nums[i] in indices:
        return [indices[nums[i]], i]
      else:
        indices[target-nums[i]] = i