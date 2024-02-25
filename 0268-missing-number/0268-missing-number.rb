# @param {Integer[]} nums
# @return {Integer}
def missing_number(nums)
  num_set = nums.to_set
  (0..nums.length).each do |n|
    return n if !num_set.include?(n)
  end
end