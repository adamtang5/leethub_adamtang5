class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        if len(nums) < 2:
            return False
        prefixMods = {}
        prefixMods[0] = prefixMods.get(0, [])
        prefixMods[0].append(-1)
        currMod = 0
        for i in range(len(nums)):
            currMod += nums[i]
            currMod %= k
            if currMod in prefixMods and any([idx < (i-1) for idx in prefixMods[currMod]]):
            # if currMod in prefixMods:
                return True
            prefixMods[currMod] = prefixMods.get(currMod, [])
            prefixMods[currMod].append(i)
        return False