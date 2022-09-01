# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def check_subarray_sum(nums, k)
    if nums.length < 2
        return false
    end
    prefixMods = Hash.new { |h, k| h[k] = [] }
    prefixMods[0] << -1
    currMod = 0
    nums.each_with_index do |num, i|
        currMod += num
        currMod %= k
        if prefixMods.key?(currMod) && prefixMods[currMod].any? { |idx| idx < i - 1 }
            return true
        end
        prefixMods[currMod] << i
    end
    return false
end