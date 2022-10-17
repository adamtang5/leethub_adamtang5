class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if any([n == 0 for n in nums]):
            start = nums.index(0)
            clean = dirty = start
            while dirty < len(nums) and clean < len(nums):
                if clean > dirty:
                    nums[clean], nums[dirty] = nums[dirty], nums[clean]
                while dirty < len(nums) and nums[dirty] != 0:
                    dirty += 1
                while clean < len(nums) and nums[clean] == 0:
                    clean += 1