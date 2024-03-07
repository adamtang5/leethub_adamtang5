# @param {Integer[]} nums
# @return {Integer}
def find_min(nums)
  l, r, max_idx = 0, nums.length-1, nil
  return nums[l] if nums[l] <= nums[r]
  max_idx = (l+r)/2
  while l <= r && max_idx+1 < nums.length && nums[max_idx+1] > nums[max_idx]
    if nums[max_idx] > nums[0]
      l = max_idx+1
    elsif nums[max_idx] < nums[0]
      r = max_idx-1
    else
      l += 1
    end
    max_idx = (l+r)/2
  end
  nums[max_idx+1]
end