/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    
    x = x.toString(10);
    let [l, r] = [0, x.length - 1];
    
    while (l < r) {
        if (x[l] !== x[r]) {
            return false;
        } else {
            l++;
            r--;
        }
    }
    return true;
};
