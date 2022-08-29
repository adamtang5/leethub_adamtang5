# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

def two_sum(nums, target)
    data = Hash.new    
    nums.each_with_index do |num, i|
        if data.key? num
            return [data[num], i]
        else
            data[target-num] = i
        end
    end
end