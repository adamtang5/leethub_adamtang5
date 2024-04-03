class Solution:
  def trailingZeroes(self, n: int) -> int:
    powers, b = [], 5
    while b <= 10000:
      powers.append(b)
      b *= 5
    return sum([n//base for base in powers])