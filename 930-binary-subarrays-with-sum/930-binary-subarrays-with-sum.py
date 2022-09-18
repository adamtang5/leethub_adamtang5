class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        ans, prefixSum = 0, 0
        prefixSums = { 0: 1 }
        for n in nums:
            prefixSum += n
            diff = prefixSum - goal
            ans += prefixSums.get(diff, 0)
            prefixSums[prefixSum] = prefixSums.get(prefixSum, 0) + 1
        return ans
    