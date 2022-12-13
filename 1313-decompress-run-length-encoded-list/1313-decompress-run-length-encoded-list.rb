# @param {Integer[]} nums
# @return {Integer[]}
def decompress_rl_elist(nums)
    ans = []
    (0...nums.length).step(2).each do |i|
        freq, val = nums[i], nums[i+1]
        ans += [val]*freq
    end
    return ans
end