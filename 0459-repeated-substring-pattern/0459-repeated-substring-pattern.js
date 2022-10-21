/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length < 2) return false;
    const prefixes = {};
    
    for (let n = 1; n <= Math.ceil(s.length / 2); n++) {
        if (s.length % n === 0) prefixes[n] = s.slice(0, n);
    }
    
    let factors = Object.keys(prefixes).map(s => +s);
    factors.sort((a, b) => b - a);
    // console.log(factors);
    
    for (let factor of factors) {
        let i = factor;
        while (i < s.length) {
            if (s.slice(i, i + factor) !== prefixes[factor]) break;
            i += factor;
        }
        if (i === s.length) return true;
    }
    return false;
};