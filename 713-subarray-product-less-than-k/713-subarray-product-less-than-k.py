class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        l, r, ans, prod = 0, 0, 0, nums[0]
        while r < len(nums) and l <= r:
            if prod < k:
                ans += r - l + 1
                r += 1
                if r < len(nums):
                    prod *= nums[r]
            elif l < r:
                prod //= nums[l]
                l += 1
            elif l == r:
                r += 1
                if r < len(nums):
                    prod *= nums[r]
        return ans