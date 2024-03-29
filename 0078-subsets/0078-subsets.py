class Solution:
  def subsets(self, nums: List[int]) -> List[List[int]]:
    ans = []
    for i in range(2**len(nums)):
      sub = []
      for j in range(len(nums)):
        if i & 1 << j:
          sub.append(nums[j])
      ans.append(sub)
    return ans