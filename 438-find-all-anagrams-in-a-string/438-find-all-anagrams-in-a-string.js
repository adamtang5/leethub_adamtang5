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
    let start = 0;
    
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - aCode]++;
        sCount[s.charCodeAt(i) - aCode]++;
    }
    const pStr = JSON.stringify(pCount);
    let ans = JSON.stringify(sCount) === pStr ? [0] : []
    
    for (let end = p.length; end < s.length; end++) {
        sCount[s.charCodeAt(end) - aCode]++;
        sCount[s.charCodeAt(start) - aCode]--;
        start++;
        // console.log(sCount, start);
        if (JSON.stringify(sCount) === pStr) ans.push(start);
    }
    return ans;
};