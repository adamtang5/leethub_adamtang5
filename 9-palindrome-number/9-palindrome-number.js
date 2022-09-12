/**
 * @param {number} x
 * @return {boolean}
 */

/*
data structure: POJO with Math.floor(log x / log 10) as key, x % 10 ** n as value
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