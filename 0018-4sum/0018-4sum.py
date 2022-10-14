import json
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        ans = set()
        for i in range(len(nums)-3):
            j = i+1
            while j < len(nums)-2:
                l, r = j+1, len(nums)-1
                while l < r:
                    currSum = nums[i]+nums[j]+nums[l]+nums[r]
                    if currSum == target:
                        ans.add(json.dumps([nums[i], nums[j], nums[l], nums[r]]))
                    if currSum <= target:
                        l += 1
                    else:
                        r -= 1
                while nums[j+1] == nums[j] and j < len(nums)-2:
                    j += 1
                j += 1
        return [json.loads(s) for s in list(ans)]