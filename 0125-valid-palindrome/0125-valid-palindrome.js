/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const re = /^[a-z0-9]$/;
    s = s.toLowerCase().split('').filter(ch => re.test(ch)).join('');
    let [l, r] = [0, s.length - 1];
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        } else {
            l++;
            r--;
        }
    }
    return true;
};