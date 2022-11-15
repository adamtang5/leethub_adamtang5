# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    l, r = -1, 0
    while r < nums.length
        if r+1 < nums.length && nums[r] == nums[r+1]
            nums[l+1] = nums[r]
            nums[l+2] = nums[r+1]
            l += 2
            r += 1
            while r < nums.length && nums[r-1] == nums[r]
                r += 1
            end
        else
            nums[l+1] = nums[r]
            l += 1
            r += 1
        end
        return l+1 if r == nums.length
    end
end