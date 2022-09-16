# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def num_subarray_product_less_than_k(nums, k)
    l, r, ans, prod = 0, 0, 0, 1
    while r < nums.length
        prod *= nums[r]
        while prod >= k && l < r
            prod /= nums[l]
            l += 1
        end
        if prod < k
            ans += r - l + 1
        end
        r += 1
    end
    return ans
end