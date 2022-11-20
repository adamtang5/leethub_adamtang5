# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    dp = Hash.new
    dp[1] = 1
    dp[2] = 2
    (3..n).each { |x| dp[x] = dp[x-1]+dp[x-2] }
    return dp[n]
end