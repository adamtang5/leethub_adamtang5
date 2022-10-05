/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const hhLookup = new Array(4).fill().map(() => new Array());
    const mmLookup = new Array(6).fill().map(() => new Array());
    
    for (let n = 0; n < 12; n++) {
        let ones = n.toString(2).split('').filter(d => d === '1').length;
        hhLookup[ones].push(n);
    }

    for (let n = 0; n < 60; n++) {
        let ones = n.toString(2).split('').filter(d => d === '1').length;
        mmLookup[ones].push(n);
    }
    
    const getPairs = (total, ub1, ub2) => {
        const ans = [];
        for (let l = 0; l <= total; l++) {
            const r = total - l;
            if (l >= 0 && l <= ub1 && r >= 0 && r <= ub2) ans.push([l, r]);
        }
        return ans;
    };
    
    const hmPairs = getPairs(turnedOn, 3, 5);
    
    const validHours = h => h.toString(10);
    
    const validMinutes = m => m < 10 ? '0' + m.toString(10) : m.toString(10);
    
    const ans = [];
    hmPairs.forEach(([hKey, mKey]) => {
        hhLookup[hKey].forEach(h => {
            mmLookup[mKey].forEach(m => {
                ans.push(validHours(h) + ":" + validMinutes(m));
            })
        })
    });
    
    return ans;
};