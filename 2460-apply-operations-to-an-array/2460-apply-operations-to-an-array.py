class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        for i in range(len(nums)-1):
            if nums[i] == nums[i+1]:
                nums[i] *= 2
                nums[i+1] = 0
        
        l, r = 0, 1
        while r < len(nums) and l < r:
            while l < len(nums) and nums[l] != 0:
                l += 1
            if l == len(nums):
                break
            if l+1 < len(nums):
                r = l+1
                while r < len(nums) and nums[r] == 0:
                    r += 1
                if r == len(nums):
                    break
            if l < r:
                nums[l], nums[r] = nums[r], nums[l]
        return nums