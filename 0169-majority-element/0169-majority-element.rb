# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
  ans, count = nil, 0
  nums.each do |num|
    if count == 0
      ans = num
      count += 1
    else
      count = ans == num ? count + 1 : count - 1
    end
  end
  ans
end