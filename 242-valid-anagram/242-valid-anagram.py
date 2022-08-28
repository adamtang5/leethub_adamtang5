class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        counts = {}
        for i in range(len(s)):
            counts[s[i]] = counts.get(s[i], 0) + 1
            
        for i in range(len(t)):
            if t[i] not in counts:
                return False
            elif counts[t[i]] == 1:
                del counts[t[i]]
            else:
                counts[t[i]] -= 1
                
        return counts == {}
                
        