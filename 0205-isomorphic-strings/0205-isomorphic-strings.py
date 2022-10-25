class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return [s.index(ch) for ch in s] == [t.index(ch) for ch in t]