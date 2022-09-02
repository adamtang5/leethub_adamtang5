# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def check_subarray_sum(nums, k)
    if nums.length < 2
        return false
    end
    prefixMods = Hash.new
    prefixMods[0] = -1
    currMod = 0
    nums.each_with_index do |num, i|
        currMod += num
        currMod %= k
        if prefixMods.key?(currMod) && prefixMods[currMod] < i - 1
            return true
        end
        if !prefixMods.key?(currMod)
            prefixMods[currMod] = i
        end
    end
    return false
end
