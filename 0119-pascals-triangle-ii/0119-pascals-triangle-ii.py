class Solution:
  def getRow(self, rowIndex: int) -> List[int]:
    if rowIndex == 0: return [1]
    ans = []
    prevRow = self.getRow(rowIndex-1)
    l = r = None
    for i in range(len(prevRow)+1):
      l = 0 if i == 0 else prevRow[i-1]
      r = 0 if i == len(prevRow) else prevRow[i]
      ans.append(l+r)
    return ans