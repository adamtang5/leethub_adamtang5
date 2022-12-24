# @param {Integer[]} nums
# @return {Boolean}
def can_jump(nums)
    i, reach = 0, nums[0]
    while i < reach
        return true if reach >= nums.length-1
        i += 1
        reach = [i+nums[i], reach].max
    end
    return reach >= nums.length-1
end