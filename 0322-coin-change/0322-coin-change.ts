function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  if (dp[amount] === Infinity) return -1
  return dp[amount]
}