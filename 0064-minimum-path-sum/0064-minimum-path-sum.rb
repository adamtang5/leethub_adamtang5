# @param {Integer[][]} grid
# @return {Integer}
def min_path_sum(grid)
    m, n = grid.length, grid[0].length
    dp = Array.new(m) { Array.new(n, 1/0.0) }
    dp[-1][-1] = grid[-1][-1]
    (n-2).downto(0).each{ |i| dp[-1][i] = dp[-1][i+1] + grid[-1][i] }
    (m-2).downto(0).each{ |i| dp[i][-1] = dp[i+1][-1] + grid[i][-1] }
    (m-2).downto(0).each do |r|
        (n-2).downto(0).each do |c|
            dp[r][c] = [dp[r+1][c], dp[r][c+1]].min + grid[r][c]
        end
    end
    return dp[0][0]
end