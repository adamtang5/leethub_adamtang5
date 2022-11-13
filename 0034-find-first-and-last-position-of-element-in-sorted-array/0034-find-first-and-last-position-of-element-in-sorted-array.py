class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums)-1
        pivot = (r+l) // 2
        while l <= r:
            if nums[pivot] != target:
                if nums[pivot] > target:
                    r = pivot-1
                else:
                    l = pivot+1
                pivot = (r+l) // 2
            else:
                l, r = pivot, pivot
                while l >= 0 and nums[l] == target:
                    l -= 1
                while r < len(nums) and nums[r] == target:
                    r += 1
                return [l+1, r-1]
        return [-1, -1]