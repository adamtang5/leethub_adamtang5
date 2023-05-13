# @param {Integer[]} height
# @return {Integer}
def area(l, r, height)
  (r-l) * [height[r], height[l]].min
end
def max_area(height)
  l, r = 0, height.length-1
  ans = area(l, r, height)
  while l < r
    curr_l, curr_r = height[l], height[r]
    if height[l] <= height[r]
      l += 1 while l < r && height[l] <= curr_l
    else
      r -= 1 while l < r && height[r] <= curr_r
    end
    ans = [ans, area(l, r, height)].max
  end
  ans
end