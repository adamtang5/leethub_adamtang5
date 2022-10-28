class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 1:
            return [nums]
        ans = []
        for i, n in enumerate(nums):
            lCopy = nums.copy()
            ext = lCopy.pop(i)
            for p in self.permute(lCopy):
                ans.append([ext] + p)
        return ans