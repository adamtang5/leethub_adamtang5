/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let sign = 1;
    const [minValue, maxValue] = [-1 * 2 ** 31, 2 ** 31 - 1];

    s = s.trim();
    
    if (s[0] === '-') {
        sign = -1;
        s = s.slice(1);
    } else if (s[0] === '+') {
        s = s.slice(1);
    }
    
    const digitsRe = /^\d+/;
    if (!s.match(digitsRe)) return 0;
    
    const ans = sign * +s.match(digitsRe)[0];
    
    if (ans < 0) return Math.max(ans, minValue);
    return Math.min(ans, maxValue);
};