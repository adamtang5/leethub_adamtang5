# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[][]}
def four_sum(nums, target)
    nums.sort!
    ans = Set.new
    i = 0
    while i < nums.length-3
        j = i+1
        while j < nums.length-2
            l, r = j+1, nums.length-1
            while l < r
                curr_sum = nums[i]+nums[j]+nums[l]+nums[r]
                if curr_sum == target
                    ans.add([nums[i], nums[j], nums[l], nums[r]])
                end
                if curr_sum <= target
                    l += 1
                else
                    r -= 1
                end
            end
            
            while nums[j+1] == nums[j] && j < nums.length-2
                j += 1
            end
            j += 1
        end
        
        while nums[i+1] == nums[i] && i < nums.length-3
            i += 1
        end
        i += 1
    end
    return ans.to_a
end