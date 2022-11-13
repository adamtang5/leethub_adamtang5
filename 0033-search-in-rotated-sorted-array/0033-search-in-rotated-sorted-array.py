class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)-1
        maxIdx = None
        if nums[0] < nums[-1]:
            maxIdx = r
        else:
            maxIdx = (r+l) // 2
            while l <= r and maxIdx+1 < len(nums) and nums[maxIdx+1] > nums[maxIdx]:
                if nums[maxIdx] > nums[0]:
                    l = maxIdx+1
                elif nums[maxIdx] < nums[0]:
                    r = maxIdx-1
                else:
                    l += 1
                maxIdx = (r+l) // 2
        
        if maxIdx < len(nums)-1:
            if target > nums[0]:
                l, r = 0, maxIdx
            elif target < nums[0]:
                l, r = maxIdx+1, len(nums)-1
            else:
                return 0
            
        pivot = (r+l) // 2
        while l <= r and pivot in range(len(nums)) and nums[pivot] != target:
            if nums[pivot] > target:
                r = pivot-1
            elif nums[pivot] < target:
                l = pivot+1
            pivot = (r+l) // 2
        if l > r:
            return -1
        if nums[pivot] == target:
            return pivot