/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const diff = gas.reduce((sum, n) => sum + n, 0) - cost.reduce((sum, n) => sum + n, 0);
  if (diff < 0) return -1;
  
  let [total, ans] = [0, 0];
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    if (total < 0) {
      total = 0;
      ans = i + 1;
    }
  }
  return ans;
};