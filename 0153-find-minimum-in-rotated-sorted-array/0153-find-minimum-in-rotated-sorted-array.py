class Solution:
  def findMin(self, nums: List[int]) -> int:
    l, r, maxIdx = 0, len(nums)-1, None
    if nums[l] <= nums[r]:
      return nums[l]
    else:
      maxIdx = (l+r)//2
      while l <= r and maxIdx+1 < len(nums) and nums[maxIdx+1] > nums[maxIdx]:
        if nums[maxIdx] > nums[0]:
          l = maxIdx+1
        elif nums[maxIdx] < nums[0]:
          r = maxIdx-1
        else:
          l += 1
        maxIdx = (l+r)//2
      return nums[maxIdx+1]