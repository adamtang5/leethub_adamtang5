# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    l, r = 0, nums.length-1
    while l <= r
        while l < nums.length && nums[l] != val
            l += 1
        end
        while r >= 0 && nums[r] == val
            r -= 1
        end
        if l < r
            nums[l], nums[r] = nums[r], nums[l]
        end
    end
    return l
end