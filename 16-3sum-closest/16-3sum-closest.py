class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        optSum = float("-inf")
        i = 0
        while i < len(nums)-2:
            l, r = i+1, len(nums)-1
            while l < r:
                currSum = nums[i] + nums[l] + nums[r]
                if currSum > target:
                    r -= 1
                elif currSum < target:
                    l += 1
                else:
                    return target
                if abs(currSum-target) < abs(optSum-target):
                    optSum = currSum
            i += 1
        return optSum