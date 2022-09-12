/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    s = x.toString(10);
    rev = s.split('').reverse().join('');
    return s === rev;
};