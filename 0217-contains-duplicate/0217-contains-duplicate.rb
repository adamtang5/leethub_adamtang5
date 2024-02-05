# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
  num_set = Set.new
  nums.each do |num|
    return true if num_set.include?(num)
    num_set << num
  end
  false
end