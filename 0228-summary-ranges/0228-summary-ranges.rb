# @param {Integer[]} nums
# @return {String[]}
def summary_ranges(nums)
  l = r = 0
  ans = []
  while l < nums.length
    r += 1 while r < nums.length-1 && nums[r+1] == nums[r]+1
    if l < nums.length
      ans << (l == r ? nums[l].to_s : nums[l].to_s+'->'+nums[r].to_s)
      l = r+1
      r = l
    end
  end
  ans
end