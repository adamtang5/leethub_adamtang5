class Solution:
    def isValid(self, s: str) -> bool:
        # base case
        if s == '':
            return True
        elif len(s) % 3 or 'abc' not in s or s[0] != 'a' or s[-1] != 'c':
            return False
        
        # recursive case
        idx = s.find('abc')
        return self.isValid(s[0:idx] + s[idx+3:])