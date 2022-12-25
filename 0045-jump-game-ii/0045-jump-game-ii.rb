# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
    ans = l = r = ub = 0
    while r < nums.length-1
        (l..r).each{ |i| ub = [ub, i+nums[i]].max }
        l = r+1
        r = ub
        ans += 1
    end
    return ans
end