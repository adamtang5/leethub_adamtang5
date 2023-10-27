/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let [ans, l, r] = [0, 0, 1];
  while (r < prices.length) {
    if (prices[r] >= prices[l]) {
      while (r < prices.length - 1 && prices[r + 1] >= prices[r]) r++;
      ans += prices[r] - prices[l];
    }
    l = r;
    r++;
  }
  return ans;
};