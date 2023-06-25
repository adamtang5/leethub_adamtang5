class Solution:
  def firstMissingPositive(self, nums: List[int]) -> int:
    positives = set()
    for n in nums:
      if n > 0:
        positives.add(n)
    missing = 1
    while missing in positives: missing += 1
    return missing