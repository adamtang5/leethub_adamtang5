# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
  positives = Hash.new
  nums.each { |n| positives[n] = true if n > 0 }
  missing = 1
  missing += 1 while positives.has_key?(missing)
  missing
end