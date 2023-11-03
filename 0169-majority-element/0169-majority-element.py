from collections import defaultdict

class Solution:
  def majorityElement(self, nums: List[int]) -> int:
    tally = defaultdict(int)
    threshold = len(nums)/2
    for num in nums:
      tally[num] += 1
      if tally[num] >= threshold:
        return num