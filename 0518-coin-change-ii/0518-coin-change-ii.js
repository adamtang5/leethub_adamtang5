/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    coins.sort((a, b) => a - b);
    const dp = new Array(coins.length).fill().map(() => new Array(amount + 1).fill(0));
    dp.forEach(row => row[0] = 1);
    for (let row = coins.length - 1; row >= 0; row--) {
        const val = coins[row];
        for (let i = 1; i <= amount; i++) {
            const lookDown = dp[row + 1] ? dp[row + 1][i] : 0;
            const lookLeft = dp[row][i - val] || 0;
            dp[row][i] = lookDown + lookLeft;
        }
    }
    return dp[0][amount];
};