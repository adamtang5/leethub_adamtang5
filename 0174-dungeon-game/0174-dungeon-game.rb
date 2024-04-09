# @param {Integer[][]} dungeon
# @return {Integer}
def calculate_minimum_hp(dungeon)
  m, n = dungeon.length, dungeon[0].length
  dp = Array.new(m){ Array.new(n) }
  dp[-1][-1] = [1, 1-dungeon[-1][-1]].max
  (0..n-2).reverse_each{ |i| dp[-1][i] = [1, dp[-1][i+1]-dungeon[-1][i]].max }
  (0..m-2).reverse_each{ |i| dp[i][-1] = [1, dp[i+1][-1]-dungeon[i][-1]].max }
  (0..m-2).reverse_each do |r|
    (0..n-2).reverse_each do |c|
      dp[r][c] = [1, [[1, dp[r][c+1]-dungeon[r][c]].max, [1, dp[r+1][c]-dungeon[r][c]].max].min].max
    end
  end
  dp[0][0]
end