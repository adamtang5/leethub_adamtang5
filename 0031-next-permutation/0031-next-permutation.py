class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def bubbleSort(start):
            for i in range(len(nums)):
                for j in range(start, len(nums)-i-1):
                    if nums[j] > nums[j+1]:
                        nums[j], nums[j+1] = nums[j+1], nums[j]
                        
        if len(nums) == 1:
            return
        l, r = len(nums)-2, len(nums)-1
        if nums[l] < nums[r]:
            nums[l], nums[r] = nums[r], nums[l]
            return
        else:
            end = len(nums)-1
            while l >= 0 and nums[l] >= nums[r]:
                l -= 1
                r -= 1
            if l < 0:
                bubbleSort(0)
                return
            while nums[end] <= nums[l]:
                end -= 1
            nums[l], nums[end] = nums[end], nums[l]
            bubbleSort(l+1)
            return
        