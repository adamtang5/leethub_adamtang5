class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        data = {}
        for i in range(len(nums)):
            if nums[i] in data:
                return [data[nums[i]], i]
            else:
                data[target - nums[i]] = i