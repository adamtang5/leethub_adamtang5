# @param {Integer[]} nums
# @return {Integer}
def find_peak_element(nums)
  return 0 if nums.length == 1
  l, r, m = 0, nums.length-1, nil
  return l if nums[l+1] < nums[l]
  return r if nums[r-1] < nums[r]
  while l < r
    m = (l+r)/2
    if nums[m] > nums[m-1] && nums[m] > nums[m+1]
      return m
    elsif nums[m] < nums[m-1]
      r = m
    else
      l = m
    end
  end
end