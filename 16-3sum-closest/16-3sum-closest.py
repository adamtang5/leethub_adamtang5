class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        optSum = float('-inf')
        for i in range(len(nums) - 2):
            l, r = i + 1, len(nums) - 1
            while l < r:
                currSum = nums[i] + nums[l] + nums[r]
                if abs(currSum - target) < abs(optSum - target):
                    optSum = currSum
                if currSum < target:
                    l += 1
                elif currSum > target:
                    r -= 1
                else:
                    return target
        return optSum