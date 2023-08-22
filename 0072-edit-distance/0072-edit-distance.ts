function minDistance(word1: string, word2: string): number {
  const dp: number[][] = new Array(word1.length + 1).fill([]).map(_ => new Array(word2.length + 1).fill(0));
  for (let c = word2.length - 1; c >= 0; c--) {
    dp[word1.length][c] = dp[word1.length][c + 1] + 1
  }
  for (let r = word1.length - 1; r >= 0; r--) {
    dp[r][word2.length] = dp[r + 1][word2.length] + 1
  }
  
  for (let r = word1.length - 1; r >= 0; r--) {
    for (let c = word2.length - 1; c >= 0; c--) {
      if (word1[r] !== word2[c]) {
        dp[r][c] = Math.min(dp[r + 1][c] + 1, dp[r + 1][c + 1] + 1, dp[r][c + 1] + 1)
      } else {
        dp[r][c] = Math.min(dp[r + 1][c] + 1, dp[r + 1][c + 1], dp[r][c + 1] + 1)
      }
    }
  }
  return dp[0][0]
}