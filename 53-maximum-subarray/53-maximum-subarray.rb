# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    prev_max = curr_max = ans = -1 / 0.0
    nums.each do |n|
        prev_max = curr_max
        curr_max = [n, n + prev_max].max
        ans = [ans, curr_max].max
    end
    return ans
end