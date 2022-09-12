import re

class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        if s == '':
            return 0

        sign = 1
        ans = ''
        
        if s[0] == '-':
            sign = -1
            s = s[1:]
        elif s[0] == '+':
            s = s[1:]
            
        digitRe = "\d"
        for i in range(len(s)):
            if re.search(digitRe, s[i]):
                ans += s[i]
                i += 1
            else:
                break
        
        if len(ans) == 0:
            return len(ans)
        ans = sign * int(ans)
        
        if ans < -1 * pow(2, 31):
            return -1 * pow(2, 31)
        elif ans > pow(2, 31) - 1:
            return pow(2, 31) - 1
        else:
            return ans