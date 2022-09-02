class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        if len(nums) < 2:
            return False
        prefixMods = {}
        prefixMods[0] = -1
        currMod = 0
        for i in range(len(nums)):
            currMod += nums[i]
            currMod %= k
            if currMod in prefixMods and prefixMods[currMod] < i-1:
                return True
            if currMod not in prefixMods:
                prefixMods[currMod] = i
        return False
