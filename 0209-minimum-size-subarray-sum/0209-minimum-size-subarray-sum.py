class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        minLen, currSum, l = float("inf"), 0, 0
        for r in range(len(nums)):
            currSum += nums[r]
            while currSum >= target:
                minLen = min(r-l+1, minLen)
                currSum -= nums[l]
                l += 1
        
        return 0 if minLen == float("inf") else minLen