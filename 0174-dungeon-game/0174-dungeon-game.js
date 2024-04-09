/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const dp = new Array(dungeon.length).fill().map(_ => new Array(dungeon[0].length).fill(0));
  dp[dungeon.length - 1][dungeon[0].length - 1] = Math.max(1, 1 - dungeon.at(-1).at(-1));
  
  for (let i = dungeon[0].length - 2; i >= 0; i--) {
    dp.at(-1)[i] = Math.max(1, dp.at(-1)[i + 1] - dungeon.at(-1)[i]);
  }
  
  for (let i = dungeon.length - 2; i >= 0; i--) {
    dp[i][dungeon[0].length - 1] = Math.max(1, dp[i + 1].at(-1) - dungeon[i].at(-1));
  }
  
  for (let r = dp.length - 2; r >= 0; r--) {
    for (let c = dp[0].length - 2; c >= 0; c--) {
      dp[r][c] = Math.max(1, Math.min(Math.max(1, dp[r][c + 1] - dungeon[r][c]), Math.max(1, dp[r + 1][c] - dungeon[r][c])));
    }
  }
  return dp[0][0];
};