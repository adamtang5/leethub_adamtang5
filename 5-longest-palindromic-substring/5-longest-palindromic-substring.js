/**
 * @param {string} s
 * @return {string}
 */

/*
Manacher's Algorithm: O(n)
*/

var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    
    s = `$${s}@`;
    s = s.split('').join('#');
    const p_ext = new Array(s.length).fill(0);
    
    let [center, r] = [0, 0];
    for (let i = 0; i < s.length - 1; i++) {
        const mirror = 2 * center - i;
        if (i < r) {
            p_ext[i] = Math.min(r - i, p_ext[mirror]);
        }
        while (s[i - 1 - p_ext[i]] === s[i + 1 + p_ext[i]]) {
            p_ext[i]++;
        }
        if (p_ext[i] + 1 > r) {
            center = i;
            r = p_ext[i] + 1;
        }
    }
    let max_ext = Math.max(...p_ext);
    center = p_ext.indexOf(max_ext);
    return s.slice(center - max_ext, center + max_ext + 1).replaceAll('#', '');
};