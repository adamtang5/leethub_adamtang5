# @param {Integer[]} numbers
# @param {Integer} target
# @return {Integer[]}
def two_sum(numbers, target)
  l, r = 0, numbers.length-1
  while l < r
    if numbers[l]+numbers[r] > target
      r -= 1
    elsif numbers[l]+numbers[r] < target
      l += 1
    else
      return [l+1, r+1]
    end
  end
end