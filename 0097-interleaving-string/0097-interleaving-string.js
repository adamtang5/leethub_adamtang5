/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const dp = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1).fill(0));
  const queue = [[0, 0]];
  while (queue.length) {
    const [x, y] = queue.shift();
    
    if (x + y === s3.length) break;
    if (s3[x + y] === s1[x] && dp[x + 1][y] === 0) {
      dp[x + 1][y] = x + y + 1;
      queue.push([x + 1, y]);
    }
    if (s3[x + y] === s2[y] && dp[x][y + 1] === 0) {
      dp[x][y + 1] = x + y + 1;
      queue.push([x, y + 1]);
    }
  }

  return dp[s1.length][s2.length] === s3.length;
};