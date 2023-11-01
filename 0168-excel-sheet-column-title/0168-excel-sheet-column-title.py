class Solution:
  def convertToTitle(self, columnNumber: int) -> str:
    ans, code = '', None
    while columnNumber > 0:
      if columnNumber % 26 > 0:
        code = columnNumber % 26
        columnNumber = columnNumber // 26
      else:
        code = 26
        columnNumber -= code
        columnNumber //= code
      ans = chr(ord('A')+code-1)+ans
    return ans