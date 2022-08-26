/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/*
data structure: arrays of length 26
*/

var findAnagrams = function(s, p) {
    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    const pLen = p.length;
    let [start, end] = [0, pLen];
    const ans = [];
    
    for (let i = 0; i < pLen; i++) {
        pCount[p.charCodeAt(i) - aCode]++;
    }
    const pStr = JSON.stringify(pCount);
    // console.log(pStr);
    
    for (let i = start; i < end; i++) {
        sCount[s.charCodeAt(i) - aCode]++;
    }
    // console.log(sCount);
    
    while (end <= s.length) {
        if (JSON.stringify(sCount) === pStr) ans.push(start);
        sCount[s.charCodeAt(start) - aCode]--;
        if (end === s.length) {
            break;
        } else {
            sCount[s.charCodeAt(end) - aCode]++;
        }
        start++;
        end++;
    }
    
    return ans;
};