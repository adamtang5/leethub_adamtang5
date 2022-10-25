class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        l = [list(t) for t in enumerate(nums)]
        l.sort(key=lambda x: x[1], reverse=True)
        l = l[0:k]
        l.sort(key=lambda x: x[0])
        return [el[1] for el in l]