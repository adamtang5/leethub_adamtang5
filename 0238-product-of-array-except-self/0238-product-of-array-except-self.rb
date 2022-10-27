# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
    ans = [1] * nums.length
    curr_prod = 1
    (0...nums.length-1).each do |i|
        curr_prod *= nums[i]
        ans[i+1] = curr_prod
    end
    curr_prod = 1
    (nums.length-1).downto(1).each do |i|
        curr_prod *= nums[i]
        ans[i-1] *= curr_prod
    end
    return ans
end