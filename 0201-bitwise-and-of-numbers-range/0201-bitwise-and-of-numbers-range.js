/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

const powers = [0];
let p = 1;
while (p <= 2147483647) {
  powers.push(p);
  p *= 2;
}

var rangeBitwiseAnd = function(left, right) {
  if (left === 0) return 0;
  let [lIdx, rIdx, i] = [-1, -1, 0];
  while (i < powers.length) {
    if (left >= powers[i]) lIdx++;
    if (right >= powers[i]) rIdx++;
    i++;
  }
  if (lIdx !== rIdx) return 0;
  return powers[lIdx] + rangeBitwiseAnd(left - powers[lIdx], right - powers[lIdx]);
}