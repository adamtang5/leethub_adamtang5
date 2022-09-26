/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // base case
    if (s === '') return true;
    if (s.length % 3) return false;
    if (!s.includes('abc')) return false;
    if (s[0] !== 'a' || s[s.length - 1] !== 'c') return false;
    
    // recursive case
    const idx = s.indexOf('abc');
    return isValid(s.slice(0, idx) + s.slice(idx + 3));
};