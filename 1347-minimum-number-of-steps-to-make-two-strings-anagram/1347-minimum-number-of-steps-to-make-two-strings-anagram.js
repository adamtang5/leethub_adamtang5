/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let counts = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - aCode]++;
        counts[t.charCodeAt(i) - aCode]--;
    }
    return counts.reduce((sum, n) => sum + Math.abs(n), 0) / 2;
};