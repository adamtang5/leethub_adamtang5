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
    let pSet = new Set(p.split(''));
    const skipIdx = [];
    for (let i = 0; i < s.length; i++) {
        if (!pSet.has(s[i])) skipIdx.push(i);
    }
    // console.log(skipIdx);
    
    let sCount;
    const aCode = 'a'.charCodeAt(0);
    const pLen = p.length;
    let [start, end] = [0, pLen];
    const ans = [];
    
    const _updateSCount = () => {
        sCount = new Array(26).fill(0);
        for (let i = start; i < end; i++) {
            sCount[s.charCodeAt(i) - aCode]++;
        }
    };
    
    for (let i = 0; i < pLen; i++) {
        pCount[p.charCodeAt(i) - aCode]++;
    }
    const pStr = JSON.stringify(pCount);
    // console.log(pStr);
    
    while (end <= s.length) {
        let i2Skip;
        if (skipIdx.some(i => {
            if (i >= start && i < end) {
                i2Skip = i;
                return true;
            } else {
                return false;
            }            
        })) {
            start = i2Skip + 1;
            end = start + pLen;
            // console.log(start, end, ans);
            _updateSCount();
        } else {
            _updateSCount();
            if (JSON.stringify(sCount) === pStr) ans.push(start);
            sCount[s.charCodeAt(start) - aCode]--;
            if (end === s.length) {
                break;
            } else {
                sCount[s.charCodeAt(end) - aCode]++;
            }
            start++;
            end++;
            // console.log(start, end, ans);
        }
    }
    
    return ans;
};