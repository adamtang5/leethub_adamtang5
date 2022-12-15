class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height)-1
        ans = (r-l) * min(height[r], height[l])
        while l < r:
            currLeft, currRight = height[l], height[r]
            if height[l] <= height[r]:
                while l < r and height[l] <= currLeft:
                    l += 1
            else:
                while l < r and height[r] <= currRight:
                    r -= 1
            ans = max(ans, (r-l) * min(height[r], height[l]))
        return ans