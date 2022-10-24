/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlphaNum = ch => {
        return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch >= '0' && ch <= '9';
    };
    
    let [l, r] = [0, s.length - 1];
    while (l < r) {
        if (!isAlphaNum(s[l])) {
            l++;
        } else if (!isAlphaNum(s[r])) {
            r--;
        } else {
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            } else {
                l++;
                r--;
            }            
        }
    }
    return true;
};