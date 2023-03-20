# @param {Integer} n
# @return {Integer}
def helper(seg, dp)
  total = 0
  (1..seg).each{ |i| total += dp[i-1]*dp[seg-i] }
  dp[seg] = total
end

def num_trees(n)
  dp = Hash.new
  dp[0] = 1
  (1..n).each{ |i| helper(i, dp) }
  return dp[n]
end