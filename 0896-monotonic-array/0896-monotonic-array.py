class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return True
        trend = None
        for i in range(1, len(nums)):
            if nums[i] != nums[i-1]:
                trend = 'inc' if nums[i] > nums[i-1] else 'dec'
                break
        for i in range(1, len(nums)):
            if trend == 'inc':
                if nums[i] < nums[i-1]:
                    return False
            elif trend == 'dec':
                if nums[i] > nums[i-1]:
                    return False
        return True