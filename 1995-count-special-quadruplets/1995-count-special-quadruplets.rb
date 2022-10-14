# @param {Integer[]} nums
# @return {Integer}
def count_quadruplets(nums)
    count = 0
    (0...nums.length-3).each do |a|
        (a+1...nums.length-2).each do |b|
            (b+1...nums.length-1).each do |c|
                (c+1...nums.length).each do |d|
                    if nums[a] + nums[b] + nums[c] == nums[d]
                        count += 1
                    end
                end
            end
        end
    end
    return count
end