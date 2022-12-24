class Solution:
    def jump(self, nums: List[int]) -> int:
        steps = [len(nums)] * len(nums)
        steps[0] = 0
        for i in range(len(nums)-1):
            for j in range(1, nums[i]+1):
                if i+j < len(steps):
                    steps[i+j] = min(steps[i+j], steps[i]+1)
        return steps[-1]