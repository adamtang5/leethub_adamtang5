class Solution:
    def minSteps(self, s: str, t: str) -> int:
        counts = {}
        for ch in s:
            counts[ch] = counts.get(ch, 0) + 1
        for ch in t:
            counts[ch] = counts.get(ch, 0) - 1
        return sum([abs(n) for n in counts.values()])