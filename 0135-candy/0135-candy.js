/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const ans = new Array(ratings.length).fill(1);
  
  for (let i = 0; i < ratings.length - 1; i++) {
    if (ratings[i + 1] > ratings[i]) ans[i + 1] = ans[i] + 1;
  }
  
  for (let i = ratings.length - 1; i >= 1; i--) {
    if (ratings[i - 1] > ratings[i]) ans[i - 1] = Math.max(ans[i - 1], ans[i] + 1);
  }
  
  return ans.reduce((sum, n) => sum + n, 0);
};