class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        l, r = 0, len(nums)-1
        while l <= r:
            while l < len(nums) and nums[l] != val:
                l += 1
            while r >= 0 and nums[r] == val:
                r -= 1
            if l < r:
                nums[l], nums[r] = nums[r], nums[l]
        return l