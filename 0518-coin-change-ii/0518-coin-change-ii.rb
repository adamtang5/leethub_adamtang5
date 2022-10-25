# @param {Integer} amount
# @param {Integer[]} coins
# @return {Integer}
def change(amount, coins)
    coins.sort!
    dp = Array.new(coins.length) { Array.new(amount+1, 0) }
    
    dp.each { |row| row[amount] = 1 }
    
    (coins.length-1).downto(0).each do |row|
        val = coins[row]
        (amount-1).downto(0).each do |col|
            look_down = row+1 < coins.length ? dp[row+1][col] : 0
            look_right = col+val <= amount ? dp[row][col+val] : 0
            dp[row][col] = look_down + look_right
        end
    end
    return dp[0][0]
end