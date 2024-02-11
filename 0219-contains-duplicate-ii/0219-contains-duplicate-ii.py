class Solution:
  def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
    if k == 0: return False
    window = collections.defaultdict(int)
    for i in range(min(k, len(nums))):
      window[nums[i]] += 1
      if window[nums[i]] > 1: return True
    for i in range(k, len(nums)):
      if nums[i] in window: return True
      if window[nums[i-k]] == 1:
        del window[nums[i-k]]
      else:
        window[nums[i-k]] -= 1
      window[nums[i]] += 1
    return False