/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let power = Math.floor(Math.log(n) / Math.log(4));
    return n > 0 && n === 4 ** power;
};