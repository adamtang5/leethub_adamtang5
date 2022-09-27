# @param {Integer[]} height
# @return {Integer}
def max_area(height)
    l, r, ans = 0, height.length - 1, 0
    while l < r
        ans = [ans, (r-l) * [height[r], height[l]].min].max
        curr_l, curr_r = height[l], height[r]
        if height[l] <= height[r]
            while l < r && height[l] <= curr_l
                l += 1
            end
        else
            while l < r && height[r] <= curr_r
                r -= 1
            end
        end
    end
    return ans
end