/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const squares = [];
  let b = 1;
  while (b * b <= n) {
    squares.push(b * b);
    b++;
  }
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (const sq of squares) {
      if (i >= sq) dp[i] = Math.min(dp[i], dp[i - sq] + 1);
    }
  }
  return dp[n];
};