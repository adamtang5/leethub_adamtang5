/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ans = 0;
  const fw = new Array(prices.length).fill(0);
  const bw = new Array(prices.length).fill(0);
  let [lMin, rMax] = [prices[0], prices.at(-1)];
  for (let i = 1; i < prices.length; i++) {
    fw[i] = Math.max(fw[i - 1], prices[i] - lMin);
    lMin = Math.min(lMin, prices[i]);
  }
  for (let i = prices.length - 2; i >= 0; i--) {
    bw[i] = Math.max(bw[i + 1], rMax - prices[i]);
    rMax = Math.max(rMax, prices[i]);
  }
  // console.log(fw, bw);
  for (let i = 1; i < prices.length; i++) {
    ans = Math.max(ans, fw[i] + bw[i]);
  }
  return ans;
};