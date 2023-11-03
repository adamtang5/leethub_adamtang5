from collections import defaultdict

class Solution:
  def majorityElement(self, nums: List[int]) -> int:
    tally = defaultdict(int)
    for num in nums:
      tally[num] += 1
    for num in tally:
      if tally[num] >= len(nums)/2:
        return num