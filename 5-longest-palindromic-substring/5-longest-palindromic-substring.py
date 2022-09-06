# Manacher's Algorithm

class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) < 2:
            return s
        s = '#'.join(list(f'${s}@'))
        # print(s)
        p_ext = [0] * len(s)
        
        center, r = 0, 0
        for i in range(len(s) - 1):
            mirror = 2 * center - i
            if i < r:
                p_ext[i] = min(r - i, p_ext[mirror])
            while s[i - 1 - p_ext[i]] == s[i + 1 + p_ext[i]]:
                p_ext[i] += 1
            if p_ext[i] + i > r:
                center = i
                r = p_ext[i] + i
            # print(p_ext)
        max_ext = max(p_ext)
        center = p_ext.index(max_ext)
        return s[center-max_ext:center+max_ext+1].replace('#', '')
