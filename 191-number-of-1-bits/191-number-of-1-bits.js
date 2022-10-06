/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    const bin = n.toString(2);
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') count++;
    }
    return count;
};