class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        minLen, currSum, l, r = float("inf"), 0, 0, 0
        while r < len(nums):
            if minLen < float("inf"):
                currSum -= nums[l]
                l += 1
            while r < len(nums) and currSum < target:
                currSum += nums[r]
                r += 1
            if r < len(nums) or currSum >= target:
                minLen = min(minLen, r-l)
        while l < r and currSum >= target:
            currSum -= nums[l]
            l += 1
            if currSum >= target:
                minLen = min(minLen, r-l)
        return 0 if minLen == float("inf") else minLen