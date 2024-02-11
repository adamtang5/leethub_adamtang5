# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def contains_nearby_duplicate(nums, k)
  return false if k == 0
  window = Hash.new{ |h, k| h[k] = 0 }
  (0...[k, nums.length].min).each do |i|
    window[nums[i]] += 1
    return true if window[nums[i]] > 1
  end
  (k...nums.length).each do |i|
    return true if window.has_key?(nums[i])
    if window[nums[i-k]] == 1
      window.delete(nums[i-k])
    else
      window[nums[i-k]] -= 1
    end
    window[nums[i]] += 1
  end
  false
end