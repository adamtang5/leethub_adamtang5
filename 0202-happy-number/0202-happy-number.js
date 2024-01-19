/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const reduce = num => {
    let [ans, d] = [0, 0];
    while (num > 0) {
      d = num % 10;
      ans += d * d;
      num = Math.floor(num / 10);
    }
    return ans;
  };
  
  let iter = 10;
  while (n !== 1 && iter > 0) {
    n = reduce(n);
    iter--;
  }
  return n === 1;
};