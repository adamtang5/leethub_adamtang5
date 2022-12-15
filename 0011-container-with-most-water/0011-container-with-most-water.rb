# @param {Integer[]} height
# @return {Integer}
def area(l, r, height)
    return (r-l) * [height[r], height[l]].min
end

def max_area(height)
    l, r = 0, height.length - 1
    ans = area(l, r, height)
    while l < r
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
        ans = [ans, area(l, r, height)].max
    end
    return ans
end