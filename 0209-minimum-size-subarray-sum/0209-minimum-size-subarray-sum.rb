# @param {Integer} target
# @param {Integer[]} nums
# @return {Integer}
def min_sub_array_len(target, nums)
    min_len, curr_sum, l, r = 1 / 0.0, 0, 0, 0
    while r < nums.length
        if min_len < 1 / 0.0
            curr_sum -= nums[l]
            l += 1
        end
        while r < nums.length && curr_sum < target
            curr_sum += nums[r]
            r += 1
        end
        if r < nums.length || curr_sum >= target
            min_len = [min_len, r-l].min
        end
    end
    while l < r && curr_sum >= target
        curr_sum -= nums[l]
        l += 1
        if curr_sum >= target
            min_len = [min_len, r-l].min
        end
    end
    return min_len == 1 / 0.0 ? 0 : min_len
end