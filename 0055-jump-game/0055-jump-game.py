class Solution:
    def canJump(self, nums: List[int]) -> bool:
        i, reach = 0, nums[0]
        while i < reach:
            if reach >= len(nums)-1:
                return True
            else:
                i += 1
                reach = max(i+nums[i], reach)
        return reach >= len(nums)-1