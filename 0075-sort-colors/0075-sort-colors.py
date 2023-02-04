class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        tally = [0] * 3
        for n in nums:
            tally[n] += 1
        
        n, i = 0, 0
        while i < len(nums):
            if tally[n] > 0:
                nums[i] = n
                tally[n] -= 1
                i += 1
            else:
                n += 1
        