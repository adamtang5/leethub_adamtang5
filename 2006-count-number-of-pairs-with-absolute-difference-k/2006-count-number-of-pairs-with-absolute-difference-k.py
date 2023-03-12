from collections import defaultdict

class Solution:
  def countKDifference(self, nums: List[int], k: int) -> int:
    indices = defaultdict(int)
    count = 0
    for num in nums:
      count += indices[num]
      indices[num+k] += 1
      indices[num-k] += 1
    return count
      