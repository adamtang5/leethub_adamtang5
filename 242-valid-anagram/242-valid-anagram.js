/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
data structure: 2 arrays of length 26
*/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const aCode = 'a'.charCodeAt(0);
    let counts = new Array(26).fill(0);
    let controlStr = JSON.stringify(counts);
    
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - aCode]++;
        counts[t.charCodeAt(i) - aCode]--;
    }
    
    return JSON.stringify(counts) === controlStr;
};