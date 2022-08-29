class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 3:
            return [nums] if sum(nums) == 0 else []
        nums.sort()
        ans = []
        i = 0
        while i < len(nums) - 2:
            l, r = i + 1, len(nums) - 1
            while l < r:
                if nums[i] + nums[l] + nums[r] < 0:
                    l += 1
                elif nums[i] + nums[l] + nums[r] > 0:
                    r -= 1
                else:
                    ans.append([nums[i], nums[l], nums[r]])
                    while l+1 < len(nums) and nums[l] == nums[l+1]:
                        l += 1
                    l += 1
            while i+1 < len(nums) and nums[i] == nums[i+1]:
                i += 1
            i += 1
        return ans
