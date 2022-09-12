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

    // 3. create lookup table
    const newIdxMods = new Array(newBase);
    for (let i = 0; i < newBase; i++) {
        newIdxMods[i] = i <= newBase / 2 ? i : newBase - i;
    }
    
    // 4. iterate through s, (ch, i)
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const iMod = i % newBase;
        rows[newIdxMods[iMod]] += ch;
    }

    return rows.join('');
};
