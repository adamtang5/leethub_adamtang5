class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        start, count = 0, 0
        for num in nums:
            if num < target:
                start += 1
            elif num == target:
                count += 1
        
        ans = []
        while count > 0:
            ans.insert(0, start+count-1)
            count -= 1
        return ans