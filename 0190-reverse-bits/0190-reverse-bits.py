class Solution:
  def reverseBits(self, n: int) -> int:
    revStr = format(n, 'b')[::-1]
    right = '0'*(32-len(revStr))
    return int(revStr+right, 2)