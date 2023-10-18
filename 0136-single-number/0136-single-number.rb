# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
  tally = Set.new
  nums.each do |num|
    if tally.include?(num)
      tally.delete(num)
    else
      tally.add(num)
    end
  end
  tally.to_a[0]
end