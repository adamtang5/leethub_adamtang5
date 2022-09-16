# @param {Integer[]} nums
# @return {Integer}
def max_product(nums)
    ans = nums.max
    curr_min, curr_max = 1, 1
    nums.each do |n|
        temp = curr_max
        curr_max = [curr_min * n, temp * n, n].max
        curr_min = [curr_min * n, temp * n, n].min
        ans = [curr_min, curr_max, ans].max
    end
    return ans
end