# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  indices = Hash.new    
  nums.each_with_index do |num, i|
    if indices.key?(num)
      return [indices[num], i]
    else
      indices[target-num] = i
    end
  end
end