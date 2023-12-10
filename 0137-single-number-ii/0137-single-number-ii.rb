# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
  ones = twos = 0
  nums.each do |num|
    ones = ones^num & ~twos
    twos = twos^num & ~ones
  end
  ones
end