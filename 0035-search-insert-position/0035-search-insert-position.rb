# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    return 0 if target < nums[0]
    return nums.length if target > nums[-1]
    l, r = 0, nums.length - 1
    pivot = (r+l) / 2
    while pivot >= 0 && pivot+1 < nums.length && (nums[pivot] > target || nums[pivot+1] <= target)
        if nums[pivot] > target
            r = pivot-1
        else
            l = pivot+1
        end
        pivot = (r+l) / 2
    end
    return nums[pivot] == target ? pivot : pivot+1
end