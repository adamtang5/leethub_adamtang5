class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l, r = -1, 0
        while r < len(nums):
            if r+1 < len(nums) and nums[r] == nums[r+1]:
                nums[l+1] = nums[r]
                nums[l+2] = nums[r+1]
                l += 2
                r += 1
                while r < len(nums) and nums[r-1] == nums[r]:
                    r += 1
            else:
                nums[l+1] = nums[r]
                l += 1
                r += 1
            if r == len(nums):
                return l+1