class Solution:
  def threeSumClosest(self, nums: List[int], target: int) -> int:
    nums.sort()
    optSum, l, r = float("-inf"), None, None
    for i in range(len(nums)-2):
      l, r = i+1, len(nums)-1
      while l < r:
        if abs(nums[i]+nums[l]+nums[r]-target) < abs(optSum-target):
          optSum = nums[i]+nums[l]+nums[r]
        if nums[i]+nums[l]+nums[r] < target:
          l += 1
        elif nums[i]+nums[l]+nums[r] > target:
          r -= 1
        else:
          return target
    return optSum