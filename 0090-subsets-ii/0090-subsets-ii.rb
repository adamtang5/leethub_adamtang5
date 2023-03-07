# @param {Integer[]} nums
# @return {Integer[][]}
def dfs(target, tallies, total, ans, keys, idx=0, res=[])
  if target == 0
    ans << res
    return
  end
  return if target > total
  curr = tallies.shift
  ([curr, target].min).downto(0).each do |part|
    dfs(target-part, tallies[0..-1], total-curr, ans, keys, idx+1, res+[keys[idx]]*part)
  end  
end

def subsets_with_dup(nums)
  nums.sort!
  tallies = [[nums[0], 1]]
  (1...nums.length).each do |i|
    if nums[i] == tallies[-1][0]
      tallies[-1][1] += 1
    else
      tallies << [nums[i], 1]
    end
  end
  
  keys = tallies.map{ |t| t[0] }
  counts = tallies.map{ |t| t[1] }
  
  ans = []
  (0..nums.length).each do |target|
    dfs(target, counts[0..-1], nums.length, ans, keys)
  end
  
  return ans
end