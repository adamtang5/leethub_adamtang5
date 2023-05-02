class Solution:
  def reverse(self, x: int) -> int:
    sign = 1 if x >= 0 else -1
    ans = sign*int(str(abs(x))[::-1])
    return 0 if ans < -1*pow(2, 31) or ans >= pow(2, 31) else ans