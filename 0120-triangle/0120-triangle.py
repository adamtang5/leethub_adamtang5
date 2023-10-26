class Solution:
  def minimumTotal(self, triangle: List[List[int]]) -> int:
    level, left, right = 0, None, None
    while level < len(triangle)-1:
      level += 1
      for i in range(level+1):
        left = float('inf') if i-1 < 0 else triangle[level-1][i-1]
        right = float('inf') if i >= level else triangle[level-1][i]
        triangle[level][i] += min(left, right)
    return min(triangle[level])