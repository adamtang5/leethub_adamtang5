/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = '', i = 0;
    let minLength = strs.reduce((min, s) => s.length < min ? s.length : min, Infinity);
    
    while (i < minLength) {
        const ch = strs[0][i];
        if (strs.map(s => s[i]).every(s => s === ch)) {
            ans += ch;
            i++;
        } else {
            break;
        }
    }
    
    return ans;
};
