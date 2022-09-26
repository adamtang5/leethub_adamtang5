class Solution:
    def isValid(self, s: str) -> bool:
        # edge cases
        if s == '':
            return True
        if len(s) % 3 or 'abc' not in s or s[0] != 'a' or s[-1] != 'c':
            return False
        
        stack = []
        for i in range(len(s)):
            if s[i] != 'c':
                stack.append(s[i])
            elif len(stack) < 2:
                return False
            elif stack[-1] == 'b' and stack[-2] == 'a':
                del stack[-2:]
            else:
                return False
            
        return len(stack) == 0