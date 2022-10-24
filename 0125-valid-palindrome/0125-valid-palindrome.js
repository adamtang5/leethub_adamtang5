/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlphaNum = ch => {
        return ch >= 'a' && ch <= 'z' || ch >= '0' && ch <= '9';
    };
    
    s = s.toLowerCase();
    let [l, r] = [0, s.length - 1];
    while (l < r) {
        if (!isAlphaNum(s[l])) {
            l++;
        } else if (!isAlphaNum(s[r])) {
            r--;
        } else {
            if (s[l] !== s[r]) {
                return false;
            } else {
                l++;
                r--;
            }            
        }
    }
    return true;
};