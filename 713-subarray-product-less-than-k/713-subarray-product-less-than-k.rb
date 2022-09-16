# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def num_subarray_product_less_than_k(nums, k)
    l, r, ans, prod = 0, 0, 0, nums[0]
    while r < nums.length && l <= r
        if prod < k
            ans += r - l + 1
            r += 1
            if r < nums.length
                prod *= nums[r]
            end
        elsif l < r
            prod /= nums[l]
            l += 1
        elsif l == r
            r += 1
            if r < nums.length
                prod *= nums[r]
            end
        end
    end
    return ans
end