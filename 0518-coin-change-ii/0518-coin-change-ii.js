/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    coins.sort((a, b) => a - b);
    const dp = new Array(coins.length).fill().map(() => new Array(amount + 1).fill(0));
    
    dp.forEach(row => row[amount] = 1);
    
    for (let row = coins.length - 1; row >= 0; row--) {
        const val = coins[row];
        for (let col = amount - 1; col >= 0; col--) {
            const lookDown = dp[row + 1] ? dp[row + 1][col] : 0;
            const lookRight = dp[row][col + val] || 0;
            dp[row][col] = lookDown + lookRight;
        }
    }
    return dp[0][0];
};