/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const re = /[^a-z0-9]/g;

    s = s.toLowerCase().replace(re, '');
    console.log(s);
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