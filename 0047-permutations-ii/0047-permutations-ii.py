class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 1:
            return [nums]
        
        uniqPerms, dupe, ans = set(), [], []
        for i, num in enumerate(nums):
            lCopy = nums.copy()
            ext = lCopy.pop(i)
            for p in self.permuteUnique(lCopy):
                dupe.append([ext] + p)
                
        for d in dupe:
            if tuple(d) not in uniqPerms:
                ans.append(d)
                uniqPerms.add(tuple(d))
        
        return ans
            