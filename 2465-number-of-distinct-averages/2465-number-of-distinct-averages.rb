# @param {Integer[]} nums
# @return {Integer}
def distinct_averages(nums)
  nums.sort!
  avgs = Set.new
  l, r = 0, nums.length-1
  while l < r
    avgs.add((nums[l]+nums[r])/2.0)
    l += 1
    r -= 1
  end
  return avgs.size
end