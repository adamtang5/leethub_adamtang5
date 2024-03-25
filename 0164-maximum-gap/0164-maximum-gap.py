class Solution:
  def maximumGap(self, nums: List[int]) -> int:
    gMin, gMax = min(nums), max(nums)
    if len(nums) < 2: return 0
    bucketSize = max(1, (gMax-gMin)//(len(nums)-1))
    buckets = collections.defaultdict(list)
    for num in nums:
      key = (num-gMin)//bucketSize
      if key in buckets:
        buckets[key] = [min(num, buckets[key][0]), max(num, buckets[key][1])]
      else:
        buckets[key] = [num, num]
    ans, preKey = 0, -1
    for key in sorted(buckets.keys()):
      if preKey != -1:
        ans = max(ans, buckets[key][0]-buckets[preKey][1])
      preKey = key
    return ans