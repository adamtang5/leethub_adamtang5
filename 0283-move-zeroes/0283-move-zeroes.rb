# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
    if nums.any? { |n| n == 0 }
        start = nums.index(0)
        clean = dirty = start
        while dirty < nums.length && clean < nums.length
            if clean > dirty
                nums[clean], nums[dirty] = nums[dirty], nums[clean]
            end
            while dirty < nums.length && nums[dirty] != 0
                dirty += 1
            end
            while clean < nums.length && nums[clean] == 0
                clean += 1
            end
        end
    end
end