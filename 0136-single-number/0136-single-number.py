class Solution:
  def singleNumber(self, nums: List[int]) -> int:
    tally = set()
    for num in nums:
      if num in tally:
        tally.remove(num)
      else:
        tally.add(num)
    return list(tally)[0]