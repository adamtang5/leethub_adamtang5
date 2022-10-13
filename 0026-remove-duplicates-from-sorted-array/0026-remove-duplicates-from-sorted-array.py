class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l, r, numsLen = 0, 0, len(nums)
        while r < numsLen:
            while r < numsLen and nums[r] == nums[l]:
                r += 1
            if r < numsLen:
                nums[l+1] = nums[r]
            l += 1
        k = 1
        while k < numsLen and nums[k] > nums[k-1]:
            k += 1
        return k