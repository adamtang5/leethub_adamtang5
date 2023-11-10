class Solution:
  def hammingWeight(self, n: int) -> int:
    return len([d for d in list(bin(n)) if d == '1'])