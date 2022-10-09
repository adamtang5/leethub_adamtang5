/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).split('').reduce((count, d) => count + (d === '1' ? 1 : 0), 0);
};