# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def count_subarrays(nums, k)
    l, r, ans, curr_sum = 0, 0, 0, 0
    while r < nums.length
        curr_sum += nums[r]
        while curr_sum * (r - l + 1) >= k
            curr_sum -= nums[l]
            l += 1
        end
        ans += r - l + 1
        r += 1
    end
    return ans
end