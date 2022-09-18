# @param {Integer[]} nums
# @return {Integer}
def zero_filled_subarray(nums)
    streak = ans = 0
    nums.each do |n|
        if n == 0
            streak += 1
        else
            ans += streak * (streak + 1) / 2
            streak = 0
        end
    end
    ans += streak * (streak + 1) / 2
    return ans
end