class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        s = list(s)
        s.sort()
        t = list(t)
        t.sort()
        
        return s == t
