class Solution:
  def titleToNumber(self, columnTitle: str) -> int:
    codes = [ord(ch)-ord('A')+1 for ch in columnTitle]
    n = ans = 0
    popped = None
    while codes:
      popped = codes.pop()
      ans += popped * pow(26, n)
      n += 1
    return ans