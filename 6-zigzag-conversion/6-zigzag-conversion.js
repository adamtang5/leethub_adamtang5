/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    if (numRows === 1) return s;

    // 1. create array of length numRows
    const rows = new Array(numRows).fill('');

    // 2. newBase -> (numRows - 1) * 2
    const newBase = (numRows - 1) * 2;

    // 3. iterate through s, (ch, i)
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const iMod = i % newBase;
        const newIdxMod = iMod <= newBase / 2 ? iMod : newBase - iMod;
        rows[newIdxMod] += ch;
    }

    return rows.join('');
};
