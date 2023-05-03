import re

class Solution:
  def myAtoi(self, s: str) -> int:
    s = s.strip()
    if s == '': return 0
    sign = 1
    
    if s[0] == '-':
      sign = -1
    if s[0] in '+-':
      s = s[1:]
    
    digitsRe = "^\d+"
    if not re.search(digitsRe, s): return 0
    
    ans = sign*int(re.match(digitsRe, s)[0])
    return max(ans, -2147483648) if ans < 0 else min(ans, 2147483647)