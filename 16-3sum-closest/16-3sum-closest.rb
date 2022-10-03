# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
    nums.sort!
    opt_sum = -1.0/0
    i = 0
    while i < nums.length-2
        l, r = i+1, nums.length-1
        while l < r
            curr_sum = nums[i] + nums[l] + nums[r]
            if curr_sum > target
                r -= 1
            elsif curr_sum < target
                l += 1
            else
                return target
            end
            if (curr_sum - target).abs < (opt_sum - target).abs
                opt_sum = curr_sum
            end
        end
        i += 1
    end
    return opt_sum
end