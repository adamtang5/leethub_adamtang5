/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // edge cases
    if (s === '') return true;
    if (s.length % 3) return false;
    if (!s.includes('abc')) return false;
    if (s[0] !== 'a' || s[s.length - 1] !== 'c') return false;
    
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'b') {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] === 'b' && stack[stack.length - 2] === 'a') {
            stack.pop();
            stack.pop();
        } else {
            return false;
        }
    }
    return !stack.length;
};