/**
 * @param {string} s
 * @return {number}
 */

/*
ask: what's the longest substring that ends at an index?

data structures:
substring to keep track of longest substring ending at an index
array to keep track of length of longest substring ending at an index
*/

var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let sub = '';
    let max = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (!sub.includes(s[i])) {
            sub += s[i];
        } else {
            sub = sub.slice(sub.indexOf(s[i]) + 1) + s[i];
        }
        if (sub.length > max) max = sub.length;
    }
    
    return max;
};