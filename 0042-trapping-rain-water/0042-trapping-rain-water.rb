# @param {Integer[]} height
# @return {Integer}
def trap(height)
  return 0 if height.length == 1
  ans, l, r = 0, 0, height.length-1
  max_l, max_r = height[l], height[r]
  level = [max_l, max_r].min
  while l < r
    if max_l <= max_r
      l += 1
      ans += [0, level-height[l]].max
      max_l = [max_l, height[l]].max
    else
      r -= 1
      ans += [0, level-height[r]].max
      max_r = [max_r, height[r]].max
    end
    level = [max_l, max_r].min
  end
  ans
end