# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def target_indices(nums, target)
    start, count = 0, 0
    nums.each do |num|
        if num < target
            start += 1
        elsif num == target
            count += 1
        end
    end
    ans = []
    while count > 0
        ans.unshift(start+count-1)
        count -= 1
    end
    return ans
end