class Solution:
  def addDigits(self, num: int) -> int:
    def reduce(n: int) -> int:
      ans = 0
      while n > 0:
        ans += n%10
        n //= 10
      return ans
    
    while num >= 10:
      num = reduce(num)
    return num