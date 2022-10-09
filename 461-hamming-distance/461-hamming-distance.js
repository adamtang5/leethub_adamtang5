/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xorStr = (x ^ y).toString(2);
    let count = 0;
    for (let i = 0; i < xorStr.length; i++) {
        if (xorStr[i] === '1') count++;
    }
    return count;
};