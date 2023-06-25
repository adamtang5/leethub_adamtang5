# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
  positives = Set.new
  nums.each { |n| positives.add(n) if n > 0 }
  missing = 1
  missing += 1 while positives.include?(missing)
  missing
end