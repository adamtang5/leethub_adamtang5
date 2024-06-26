/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  const powers = [];
  let b = 5;
  while (b < 10000) {
    powers.push(b);
    b *= 5;
  }
  return powers.reduce((sum, base) => sum + Math.floor(n / base), 0);
};