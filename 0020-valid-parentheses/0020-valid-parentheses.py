class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        open = {
            ')': '(',
            ']': '[',
            '}': '{',
        }
        def isOpen(p):
            return p in '([{'
        
        for p in s:
            if isOpen(p):
                stack.append(p)
            elif len(stack) == 0 or stack.pop(-1) != open[p]:
                return False
            
        return not len(stack)