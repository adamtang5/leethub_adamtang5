# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def bubble_sort(start, nums)
    (0...nums.length).each do |i|
        (start...nums.length-i-1).each do |j|
            if nums[j] > nums[j+1]
                nums[j], nums[j+1] = nums[j+1], nums[j]
            end
        end
    end
end

def next_permutation(nums)
    return if nums.length == 1
    l, r = nums.length-2, nums.length-1
    if nums[l] < nums[r]
        nums[l], nums[r] = nums[r], nums[l]
        return
    else
        last = nums.length-1
        while l >= 0 && nums[l] >= nums[r]
            l -= 1
            r -= 1
        end
        if l < 0
            bubble_sort(0, nums)
            return
        end
        while nums[last] <= nums[l]
            last -= 1
        end
        nums[l], nums[last] = nums[last], nums[l]
        bubble_sort(l+1, nums)
        return
    end
end