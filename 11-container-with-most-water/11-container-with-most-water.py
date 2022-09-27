class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r, ans = 0, len(height)-1, 0
        while l < r:
            ans = max(ans, (r-l) * min(height[r], height[l]))
            currLeft, currRight = height[l], height[r]
            if height[l] <= height[r]:
                while l < r and height[l] <= currLeft:
                    l += 1
            else:
                while l < r and height[r] <= currRight:
                    r -= 1
        return ans