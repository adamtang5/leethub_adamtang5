/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let [ans, l, r] = [0, 0, 1];
  while (r < prices.length) {
    ans = Math.max(ans, prices[r] - prices[l]);
    if (prices[r] < prices[l]) l = r;
    r++;
  }
  return ans;
};