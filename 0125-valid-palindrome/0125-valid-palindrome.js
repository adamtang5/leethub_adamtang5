/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const re = /^[a-z0-9]$/;
    s = s.toLowerCase().split('').filter(ch => re.test(ch)).join('');
    let rev = s.split('').reverse().join('');
    return s === rev;
};