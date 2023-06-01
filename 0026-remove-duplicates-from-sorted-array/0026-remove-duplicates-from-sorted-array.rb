# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  l, r, len = 0, 0, nums.length
  while r < len
    r += 1 while r < len && nums[r] == nums[l]
    nums[l+1] = nums[r] if r < len
    l += 1
  end
  l
end