# @param {Integer[]} nums
# @return {Boolean}
def is_monotonic(nums)
    return true if nums.length == 1
    trend = nil
    (1...nums.length).each do |i|
        if nums[i] != nums[i-1]
            trend = nums[i] > nums[i-1] ? 'inc' : 'dec'
            break
        end
    end
    (1...nums.length).each do |i|
        if trend == 'inc'
            return false if nums[i] < nums[i-1]
        elsif trend == 'dec'
            return false if nums[i] > nums[i-1]
        end
    end
    return true
end