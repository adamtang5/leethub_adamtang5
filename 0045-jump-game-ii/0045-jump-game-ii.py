class Solution:
    def jump(self, nums: List[int]) -> int:
        steps = [float("inf")] * len(nums)
        steps[0] = 0
        for i in range(len(nums)-1):
            j = 1
            while i+j < len(steps) and j <= nums[i]:
                steps[i+j] = min(steps[i+j], steps[i]+1)
                j += 1
        return steps[-1]