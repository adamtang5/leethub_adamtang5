class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ans = [1] * len(nums)
        currProd = 1
        for i in range(len(nums)-1):
            currProd *= nums[i]
            ans[i+1] *= currProd
        currProd = 1
        for i in range(len(nums)-1, 0, -1):
            currProd *= nums[i]
            ans[i-1] *= currProd
        return ans