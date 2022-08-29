class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        ans, prefixSum = 0, 0
        prefixSums = {}
        prefixSums[0] = 1
        for n in nums:
            prefixSum += n
            if prefixSum - k in prefixSums:
                ans += prefixSums[prefixSum - k]
            prefixSums[prefixSum] = prefixSums.get(prefixSum, 0) + 1
        return ans