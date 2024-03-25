# @param {Integer[]} nums
# @return {Integer}
def maximum_gap(nums)
  g_min, g_max = nums.min, nums.max
  return 0 if nums.length < 2
  bucket_size = [1, (g_max-g_min)/(nums.length-1)].max
  buckets = Hash.new
  nums.each do |num|
    key = (num-g_min)/bucket_size
    if buckets.has_key?(key)
      buckets[key] = [[num, buckets[key][0]].min, [num, buckets[key][1]].max]
    else
      buckets[key] = [num, num]
    end
  end
  ans, pre_key = 0, -1
  buckets.keys.sort.each do |key|
    ans = [ans, buckets[key][0]-buckets[pre_key][1]].max if pre_key != -1
    pre_key = key
  end
  ans
end