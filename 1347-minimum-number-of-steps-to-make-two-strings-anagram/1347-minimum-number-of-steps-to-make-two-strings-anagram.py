class Solution:
    def minSteps(self, s: str, t: str) -> int:
        counts = {}
        for i in range(len(s)):
            counts[s[i]] = counts.get(s[i], 0) + 1
            counts[t[i]] = counts.get(t[i], 0) - 1
        return round(sum([abs(n) for n in counts.values()]) / 2)