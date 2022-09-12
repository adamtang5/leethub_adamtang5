import re

class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        sign = 1
        
        digitsRe = "^[-+]?\d+"
        if not re.match(digitsRe, s):
            return 0
        
        if s[0] == '-':
            sign = -1
            s = s[1:]
        elif s[0] == '+':
            s = s[1:]
            
        ans = sign * int(re.findall(digitsRe, s)[0])
        
        if ans < -1 * pow(2, 31):
            return -1 * pow(2, 31)
        elif ans > pow(2, 31) - 1:
            return pow(2, 31) - 1
        else:
            return ans