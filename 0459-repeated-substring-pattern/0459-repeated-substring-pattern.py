class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        if len(s) < 2:
            return False
        prefixes = dict()
        for n in range(1, len(s) // 2 + 1):
            if len(s) % n == 0:
                prefixes[n] = s[0:n]
        factors = list(prefixes.keys())
        factors.sort(reverse=True)
        
        for factor in factors:
            i = factor
            while i < len(s):
                if (s[i:i+factor] == prefixes[factor]):
                    i += factor
                else:
                    break
            if i == len(s):
                return True
        return False