class Solution:
  def findMin(self, nums: List[int]) -> int:
    if len(nums) == 1: return nums[0]
    l, r, m = 0, len(nums)-1, None
    while l < r and l in range(len(nums)) and r in range(len(nums)):
      m = (l+r)//2
      if m > 0 and nums[m-1] > nums[m]: return nums[m]
      if l == m: return min(nums[l], nums[r])
      if nums[l] < nums[m] and nums[m] < nums[r]:
        return nums[l]
      elif nums[r] < nums[l]:
        if nums[m] >= nums[l]:
          l = m+1
        else:
          r = m-1
      elif nums[l] == nums[r]:
        if nums[m] == nums[l]:
          l += 1
          r -= 1
        elif nums[m] > nums[l]:
          l = m+1
        else:
          r = m
      elif nums[l] < nums[r]:
        if nums[m] == nums[r]:
          r = m-1
        else:
          r = m
    return min(nums[l], nums[r])