# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def search_range(nums, target)
    l, r = 0, nums.length-1
    pivot = (r+l) / 2
    while l <= r
        if nums[pivot] != target
            if nums[pivot] > target
                r = pivot-1
            else
                l = pivot+1
            end
            pivot = (r+l) / 2
        else
            l, r = pivot, pivot
            while l >= 0 && nums[l] == target
                l -= 1
            end
            while r < nums.length && nums[r] == target
                r += 1
            end
            return [l+1, r-1]
        end
    end
    return [-1, -1]
end