# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def subarray_sum(nums, k)
    ans, currSum = 0, 0
    prefixSums = Hash.new(0)
    prefixSums[0] += 1
    nums.each do |n|
        currSum += n
        diff = currSum - k
        ans += prefixSums[diff]
        prefixSums[currSum] += 1
    end
    return ans
end