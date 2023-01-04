# @param {Integer[]} nums
# @return {Integer[][]}
def permute_unique(nums)
    return [nums] if nums.length == 1
    
    uniq_perms, dupe, ans = Set.new, [], []
    nums.each_with_index do |num, i|
        copy = nums.map(&:clone)
        ext = copy.delete_at(i)
        permute_unique(copy).each{ |p| dupe << [ext] + p }
    end
    
    dupe.each do |d|
        if !uniq_perms.include?(d)
            ans << d
            uniq_perms.add(d)
        end
    end
    
    return ans
end