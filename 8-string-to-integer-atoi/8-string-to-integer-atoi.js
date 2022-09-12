/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    let sign = 1;
    
    if (s[0] === '-') {
        sign = -1;
        s = s.slice(1);
    } else if (s[0] === '+') {
        s = s.slice(1);
    }
    
    const digitsRe = /^\d+/;
    if (!s.match(digitsRe)) return 0;
    
    const ans = sign * +s.match(digitsRe)[0];
    
    if (ans < -1 * 2 ** 31) {
        return -1 * 2 ** 31;
    } else if (ans >= 2 ** 31) {
        return 2 ** 31 - 1;
    } else {
        return ans;
    }
};