/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const squares = [];
  const dp = {};
  let sq;
  for (let b = 1; b <= Math.floor(Math.sqrt(n)); b++) {
    sq = b * b;
    squares.unshift(sq);
    dp[sq] = 1;
  }
  
  const populate = num => {
    if (num in dp) return;
    squares.forEach(sq => {
      if (sq <= num && num - sq in dp) {
        dp[num] = Math.min(dp[num] || num, dp[sq] + dp[num - sq]);
      }
    });
  };
  
  for (let b = 1; b <= n; b++) populate(b);
  return dp[n];
};