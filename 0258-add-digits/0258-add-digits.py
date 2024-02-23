class Solution:
  def addDigits(self, num: int) -> int:
    if num == 0: return num
    num %= 9
    if num == 0: return 9
    return num