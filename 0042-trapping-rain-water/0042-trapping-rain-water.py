class Solution:
  def trap(self, height: List[int]) -> int:
    if len(height) == 1: return 0
    ans = 0
    lBound = [0]*len(height)
    rBound = [0]*len(height)
    for i in range(1, len(lBound)):
      lBound[i] = max(lBound[i-1], height[i-1])
    for i in range(len(rBound)-2, -1, -1):
      rBound[i] = max(rBound[i+1], height[i+1])
    for i in range(1, len(lBound)-1):
      level = min(lBound[i], rBound[i])
      ans += max(0, level-height[i])
    return ans