# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
    tally = [0] * 3
    nums.each{ |n| tally[n] += 1 }
    n = i = 0
    while i < nums.length
        if tally[n] > 0
            nums[i] = n
            tally[n] -= 1
            i += 1
        else
            n += 1
        end
    end
end