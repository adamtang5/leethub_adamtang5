/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  const ans = [];
  const prevRow = getRow(rowIndex - 1);
  let l, r;
  for (let i = 0; i <= prevRow.length; i++) {
    l = prevRow[i - 1] || 0;
    r = prevRow[i] || 0;
    ans.push(l + r);
  }
  return ans;
};