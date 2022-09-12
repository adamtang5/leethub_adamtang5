import re

class Solution:
    def myAtoi(self, s: str) -> int:
        maxValue = 2 ** 31 - 1
        minValue = -2 ** 31
        
        i = 0
        ans = 0
        sign = 1
        
        # whitespace
        while i < len(s) and s[i] == ' ':
            i += 1
            
        # +/-
        if i < len(s) and s[i] == '-':
            i += 1
            sign = -1
        elif i < len(s) and s[i] == '+':
            i += 1
            
        # check number 0-9
        digits = set('0123456789')
        while i < len(s) and s[i] in digits:
            ans = ans * 10 + int(s[i])
            i += 1
            
        # check bounds
        ans *= sign
        
        if ans < 0:
            return max(ans, minValue)
        return min(ans, maxValue)
        