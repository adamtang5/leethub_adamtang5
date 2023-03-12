# @param {Integer[]} nums
# @return {Integer}
def distinct_averages(nums)
  nums.sort!
  avgs = Set.new
  while nums.length > 0
    min, max = nums.shift, nums.pop
    avgs.add((min+max)/2.0)
  end
  return avgs.size
end