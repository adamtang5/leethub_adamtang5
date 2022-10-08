/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    while (n > 1) {
        if (n % 4) return false;
        n /= 4;
    }
    return n === 1;
};