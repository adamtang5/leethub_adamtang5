# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
  tally = Hash.new(0)
  nums.each do |num|
    tally[num] += 1
    return num if tally[num] >= nums.length / 2.0
  end
end