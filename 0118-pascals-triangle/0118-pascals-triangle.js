/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]];
  const ans = [[1], [1, 1]];
  while (numRows > 2) {
    const next = [];
    const prev = ans.at(-1);
    next.push(1);
    for (let i = 1; i < prev.length; i++) {
      next.push(prev[i - 1] + prev[i]);
    }
    next.push(1);
    ans.push(next);
    numRows--;
  }
  return ans;
};