# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
  return nums.sum == 0 ? [nums] : [] if nums.length == 3
  nums.sort!
  ans = []
  i, l, r = 0, nil, nil
  while i < nums.length-2
    l, r = i+1, nums.length-1
    while l < r
      if nums[i]+nums[l]+nums[r] > 0
        r -= 1
      elsif nums[i]+nums[l]+nums[r] < 0
        l += 1
      else
        ans << [nums[i], nums[l], nums[r]]
        l += 1 while l+1 < nums.length && nums[l] == nums[l+1]
        l += 1
      end
    end
    i += 1 while i+1 < nums.length && nums[i] == nums[i+1]
    i += 1
  end
  ans
end