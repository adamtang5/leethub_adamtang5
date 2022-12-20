# @param {Integer} target
# @param {Integer[]} nums
# @return {Integer}
def min_sub_array_len(target, nums)
    min_len, curr_sum, l = 1 / 0.0, 0, 0
    (0...nums.length).each do |r|
        curr_sum += nums[r]
        while curr_sum >= target
            min_len = [min_len, r-l+1].min
            curr_sum -= nums[l]
            l += 1
        end
    end
    return min_len == 1 / 0.0 ? 0 : min_len
end