# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
  nums.sort!
  opt_sum, l, r = -1*Float::INFINITY, nil, nil
  (0...nums.length-2).each do |i|
    l, r = i+1, nums.length-1
    while l < r
      opt_sum = nums[i]+nums[l]+nums[r] if (nums[i]+nums[l]+nums[r]-target).abs < (opt_sum-target).abs
      
      if nums[i]+nums[l]+nums[r] < target
        l += 1
      elsif nums[i]+nums[l]+nums[r] > target
        r -= 1
      else
        return target
      end
    end
  end
  opt_sum
end