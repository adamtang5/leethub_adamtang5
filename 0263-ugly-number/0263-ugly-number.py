class Solution:
  def isUgly(self, n: int) -> bool:
    if n <= 0: return False
    if n < 7: return True
    factors = [2, 3, 5]
    for f in factors:
      while n%f == 0:
        n //= f
    return n == 1