# @param {Integer[]} nums
# @return {Integer[]}
def apply_operations(nums)
    (0...nums.length-1).each do |i|
        if nums[i] == nums[i+1]
            nums[i] *= 2
            nums[i+1] = 0
        end
    end
    
    l, r = 0, 1
    while r < nums.length && l < r
        while l < nums.length && nums[l] != 0
            l += 1
        end
        break if l == nums.length
        if l+1 < nums.length
            r = l+1
            while r < nums.length && nums[r] == 0
                r += 1
            end
            break if r == nums.length
        end
        if l < r
            nums[l], nums[r] = nums[r], nums[l]
        end
    end
    return nums
end