/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = '';
    let minLength = Infinity;
    for (let str of strs) {
        minLength = Math.min(minLength, str.length);
    }
    
    let i = 0;
    while (i < minLength) {
        let ch = strs[0][i];
        if (strs.map(s => s[i]).every(s => s === ch)) {
            ans += ch;
            i++;
        } else {
            break;
        }
    }
    
    return ans;
};