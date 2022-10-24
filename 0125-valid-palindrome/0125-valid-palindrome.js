/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = '';
    const lowerNumeric = /[a-z0-9]/;
    for (let i = 0; i < s.length; i++) {
        if (lowerNumeric.test(s[i].toLowerCase())) {
            newS += s[i].toLowerCase();
        }
    }
    console.log(newS);
    let [l, r] = [0, newS.length - 1];
    while (l < r) {
        if (newS[l] !== newS[r]) {
            return false;
        } else {
            l++;
            r--;
        }
    }
    return true;
};