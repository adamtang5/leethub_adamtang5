/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n > 1) {
        if (n % 2) return false;
        n /= 2;
    }
    return n === 1;
};