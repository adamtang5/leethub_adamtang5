# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    l, r = 0, nums.length-1
    max_idx = nil
    if nums[0] < nums[-1]
        max_idx = r
    else
        max_idx = (r+l) / 2
        while l <= r && max_idx+1 < nums.length && nums[max_idx+1] > nums[max_idx]
            if nums[max_idx] > nums[0]
                l = max_idx+1
            elsif nums[max_idx] < nums[0]
                r = max_idx-1
            else
                l += 1
            end
            max_idx = (r+l) / 2
        end
    end
    
    if max_idx < nums.length-1
        if target > nums[0]
            l, r = 0, max_idx
        elsif target < nums[0]
            l, r = max_idx+1, nums.length-1
        else
            return 0
        end
    end
    
    pivot = (r+l) / 2
    while l <= r && pivot >= 0 && pivot < nums.length && nums[pivot] != target
        if nums[pivot] > target
            r = pivot-1
        elsif nums[pivot] < target
            l = pivot+1
        end
        pivot = (r+l) / 2
    end
    return -1 if l > r
    return pivot if nums[pivot] == target
end