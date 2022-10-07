/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reversedArr = n.toString(2).split('').reverse();
    let right = new Array(32 - reversedArr.length).fill('0');
    return parseInt([...reversedArr, ...right].join(''), 2);
};