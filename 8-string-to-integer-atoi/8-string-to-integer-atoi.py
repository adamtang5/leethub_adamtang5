import re

class Solution:
    def myAtoi(self, s: str) -> int:
        maxValue = pow(2, 31) - 1
        minValue = -1 * pow(2, 31)
        s = s.strip()
        sign = 1
        ans = ''
        
        if len(s) > 0:
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
        
        if ans < minValue:
            return minValue
        elif ans > maxValue:
            return maxValue
        else:
            return ans