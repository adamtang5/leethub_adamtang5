class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        ranks = {n:r for r, n in enumerate(sorted(set(arr)), start=1)}
        return map(ranks.get, arr)