/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let bits = n.toString(2);
    for (let i = 0; i < bits.length - 1; i++) {
        if (bits[i] === bits[i + 1]) return false;
    }
    return true;
};