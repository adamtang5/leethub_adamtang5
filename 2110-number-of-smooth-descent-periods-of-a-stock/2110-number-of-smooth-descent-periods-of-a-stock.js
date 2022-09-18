/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let [l, r, ans] = [0, 0, 0];
    while (r < prices.length) {
        ans += r - l + 1;
        r++;
        if (prices[r] !== prices[r - 1] - 1) {
            l = r;
        }
    }
    return ans;
};