# @param {Integer[]} nums
# @param {Integer} target
# @return {Boolean}
def search(nums, target)
  l, r, m = 0, nums.length-1, nil
  while l <= r
    m = (l+r)/2
    return true if nums[m] == target
    if nums[l] == nums[m] && nums[m] == nums[r]
      l += 1
      r -= 1
    elsif nums[l] <= nums[m]
      if nums[l] <= target && target < nums[m]
        r = m-1
      else
        l = m+1
      end
    else
      if nums[m] < target && target <= nums[r]
        l = m+1
      else
        r = m-1
      end
    end
  end
  false
end