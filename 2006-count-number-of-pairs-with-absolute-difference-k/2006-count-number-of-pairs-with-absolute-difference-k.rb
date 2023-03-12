# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def count_k_difference(nums, k)
  indices = Hash.new(0)
  count = 0
  nums.each do |num|
    count += indices[num]
    indices[num+k] += 1
    indices[num-k] += 1
  end
  return count
end