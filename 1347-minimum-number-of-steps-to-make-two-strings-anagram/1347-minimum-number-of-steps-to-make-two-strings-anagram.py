class Solution:
    def minSteps(self, s: str, t: str) -> int:
        counts = {}
        for ch in s:
            counts[ch] = counts.get(ch, 0) + 1
        ans = 0
        for ch in t:
            if ch in counts and counts[ch] > 0:
                counts[ch] -= 1
            else:
                ans += 1
        return ans