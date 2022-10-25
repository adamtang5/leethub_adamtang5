class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target < nums[0]:
            return 0
        if target > nums[-1]:
            return len(nums)
        l, r = 0, len(nums)-1
        pivot = (r+l) // 2
        while pivot in range(len(nums)-1) and (nums[pivot] > target or nums[pivot+1] <= target):
            if nums[pivot] > target:
                r = pivot-1
            else:
                l = pivot+1
            pivot = (r+l) // 2
        return pivot if nums[pivot] == target else pivot+1