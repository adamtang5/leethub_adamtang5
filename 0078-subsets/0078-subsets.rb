# @param {Integer[]} nums
# @return {Integer[][]}
def subsets(nums)
  ans = []
  (0...2**nums.length).each do |i|
    sub = []
    (0...nums.length).each do |j|
      sub << nums[j] if i & (1<<j) > 0
    end
    ans << sub
  end
  ans
end