class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        l, r, ans, prod = 0, 0, 0, 1
        while r < len(nums):
            prod *= nums[r]
            while prod >= k and l < r:
                prod //= nums[l]
                l += 1
            if prod < k:
                ans += r - l + 1
            r += 1
        return ans