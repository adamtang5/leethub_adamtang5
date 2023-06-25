class Solution:
  def firstMissingPositive(self, nums: List[int]) -> int:
    positives = dict()
    for n in nums:
      if n > 0:
        positives[n] = True
    missing = 1
    while missing in positives: missing += 1
    return missing