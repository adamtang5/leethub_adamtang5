/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if (n <= 0) return false;
  if (n < 7) return true;
  const factors = [2, 3, 5];
  for (const f of factors) {
    while (n % f === 0) n /= f;
  }
  return n === 1;
};