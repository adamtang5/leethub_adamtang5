class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        l, r, ans, currSum = 0, 0, 0, 0
        while r < len(nums):
            currSum += nums[r]
            while currSum * (r - l + 1) >= k:
                currSum -= nums[l]
                l += 1
            ans += r - l + 1
            r += 1
        return ans