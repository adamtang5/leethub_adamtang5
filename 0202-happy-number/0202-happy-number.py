class Solution:
  def isHappy(self, n: int) -> bool:
    def reduce(num: int) -> int:
      ans = d = 0
      while num > 0:
        d = num%10
        ans += d*d
        num = num//10
      return ans
    
    iter = 7
    while n != 1 and iter > 0:
      n = reduce(n)
      iter -= 1
    return n == 1