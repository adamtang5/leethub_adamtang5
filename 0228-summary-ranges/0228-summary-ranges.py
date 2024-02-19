class Solution:
  def summaryRanges(self, nums: List[int]) -> List[str]:
    l = r = 0
    ans = []
    while l < len(nums):
      while r < len(nums)-1 and nums[r+1] == nums[r]+1:
        r += 1
      if l < len(nums):
        if l == r:
          ans.append(str(nums[l]))
        else:
          ans.append(str(nums[l])+'->'+str(nums[r]))
        l = r+1
        r = l
    return ans