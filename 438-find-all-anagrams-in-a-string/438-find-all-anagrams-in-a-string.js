/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];
    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    const [pLen, sLen] = [p.length, s.length];
    let start = 0;
    
    for (let i = 0; i < pLen; i++) {
        pCount[p.charCodeAt(i) - aCode]++;
        sCount[s.charCodeAt(i) - aCode]++;
    }
    const pStr = JSON.stringify(pCount);
    let ans = JSON.stringify(sCount) === pStr ? [0] : []
    
    for (let end = pLen; end < sLen; end++) {
        sCount[s.charCodeAt(end) - aCode]++;
        sCount[s.charCodeAt(start) - aCode]--;
        start++;
        if (JSON.stringify(sCount) === pStr) ans.push(start);
    }
    return ans;
};
