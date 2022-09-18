# @param {Integer[]} nums
# @param {Integer} goal
# @return {Integer}
def num_subarrays_with_sum(nums, goal)
    ans = prefix_sum = 0
    prefix_sums = Hash.new(0)
    prefix_sums[0] = 1
    nums.each do |n|
        prefix_sum += n
        diff = prefix_sum - goal
        ans += prefix_sums[diff]
        prefix_sums[prefix_sum] += 1
    end
    return ans
end