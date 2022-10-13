# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    l, r, len = 0, 0, nums.length
    while r < len
        while r < len && nums[r] == nums[l]
            r += 1
        end
        if r < len
            nums[l+1] = nums[r]
        end
        l += 1
    end
    k = 1
    while k < len && nums[k] > nums[k-1]
        k += 1
    end
    return k
end