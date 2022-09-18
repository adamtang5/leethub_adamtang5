class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        currStreak = ans = 0
        
        for n in nums:
            if n == 0:
                currStreak += 1
            else:
                ans += currStreak * (currStreak + 1) // 2
                currStreak = 0
        ans += currStreak * (currStreak + 1) // 2
        return ans
