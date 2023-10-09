class Solution:
  def generate(self, numRows: int) -> List[List[int]]:
    if numRows == 1: return [[1]]
    ans = [[1], [1, 1]]
    while numRows > 2:
      prev = ans[-1]
      next = [1]
      for i in range(1, len(prev)):
        next.append(prev[i-1]+prev[i])
      next.append(1)
      ans.append(next)
      numRows -= 1
    return ans
      