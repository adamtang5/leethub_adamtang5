# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
  tally = Hash.new(0)
  nums.each{ |num| tally[num] += 1 }
  tally.each do |num, count|
    return num if count >= nums.length / 2.0
  end
end