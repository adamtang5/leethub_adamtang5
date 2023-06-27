# @param {Integer[]} height
# @return {Integer}
def trap(height)
  return 0 if height.length == 1
  ans = 0
  level = nil
  l_bound = [0]*height.length
  r_bound = [0]*height.length
  (1...l_bound.length).each{ |i| l_bound[i] = [l_bound[i-1], height[i-1]].max }
  (0...l_bound.length-1).reverse_each{ |i| r_bound[i] = [r_bound[i+1], height[i+1]].max }
  (1...l_bound.length-1).each do |i|
    level = [l_bound[i], r_bound[i]].min
    ans += [0, level-height[i]].max
  end
  ans
end