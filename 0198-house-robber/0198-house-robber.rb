# @param {Integer[]} nums
# @return {Integer}
def rob(nums)
  dp = [0]*nums.length
  dp[-1] = nums[-1]
  dp[-2] = [nums[-2], nums[-1]].max if nums.length > 1
  (0...nums.length-2).reverse_each{ |i| dp[i] = [nums[i]+dp[i+2], dp[i+1]].max }
  dp[0]
end