/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let [i, ans, sign] = [0, 0, 1];
    const [minValue, maxValue] = [-1 * 2 ** 31, 2 ** 31 - 1];

    // whitespace
    while (i < s.length && s[i] == ' ') {
        i++;
    }
    
    // +/-
    if (i < s.length && s[i] === '-') {
        sign = -1;
        i++;
    } else if (i < s.length && s[i] === '+') {
        i++;
    }
    
    // check for digit
    const digits = new Set();
    '0123456789'.split('').forEach(d => digits.add(d));
    while (i < s.length && digits.has(s[i])) {
        ans = ans * 10 + (+s[i]);
        i++;
    }
    
    ans *= sign
    
    if (ans < 0) return Math.max(ans, minValue);
    return Math.min(ans, maxValue);
};