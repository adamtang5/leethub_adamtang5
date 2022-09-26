# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def unique_paths(m, n)
    dp = Array.new(m) { Array.new(n, 1) }
    
    (m-2).downto(0).each do |r|
        (n-2).downto(0).each do |c|
            dp[r][c] = dp[r+1][c] + dp[r][c+1]
        end
    end
    
    return dp[0][0]
end