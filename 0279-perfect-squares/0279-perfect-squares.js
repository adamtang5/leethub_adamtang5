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
    let val = num;
    squares.forEach(sq => {
      if (sq <= num) {
        if (num - sq in dp) {
          val = Math.min(val, dp[sq] + dp[num - sq]);
          dp[num] = val;
        }
      }
    });
  };
  
  for (let b = 1; b <= n; b++) populate(b);
  
  return dp[n];
};