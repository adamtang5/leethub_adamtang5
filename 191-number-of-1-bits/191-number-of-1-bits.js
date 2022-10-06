/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n > 0) {
        if (n % 2) count++;
        n = (n - (n % 2)) / 2;
    }
    return count;
};