/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  const newBase = (numRows - 1) * 2;
  for (let i = 0; i < s.length; i++) {
    const iMod = i % newBase;
    const newIdxMod = iMod <= newBase / 2 ? iMod : newBase - iMod;
    rows[newIdxMod] += s[i];
  }
  return rows.join('');
};