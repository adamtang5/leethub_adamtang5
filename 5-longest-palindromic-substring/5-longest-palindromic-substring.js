/**
 * @param {string} s
 * @return {string}
 */

/*
Ask the question: what's the longest palindromic substring with i as the middle or i, i+1 as the middle
*/

var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    
    let maxLength = 1;
    let maxSub = s[0];
    let ub = s.length % 2 ? s.length : s.length - 1;
    let l, r;
    
    for (let i = 0; i < ub; i++) {
        // odd
        [l, r] = [i, i];
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLength) {
                maxLength = r - l + 1;
                maxSub = s.slice(l, r + 1);
            }
            l--;
            r++;
        }

        // even
        [l, r] = [i, i + 1];
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLength) {
                maxLength = r - l + 1;
                maxSub = s.slice(l, r + 1);
            }
            l--;
            r++;
        }

    }
    
    return maxSub;
};