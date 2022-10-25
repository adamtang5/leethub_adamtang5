/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const tallyS = {};
    const tallyT = {};
    
    for (let i = 0; i < s.length; i++) {
        tallyS[s[i]] = tallyS[s[i]] || [];
        tallyS[s[i]].push(i);
        tallyT[t[i]] = tallyT[t[i]] || [];
        tallyT[t[i]].push(i);
    }
    
    const compare = (a, b) => {
        if (JSON.stringify(a) > JSON.stringify(b)) {
            return 1;
        } else if (JSON.stringify(a) < JSON.stringify(b)) {
            return -1;
        } else {
            return 0;
        }
    }
    
    let sortedS = Object.values(tallyS);
    sortedS.sort(compare);

    let sortedT = Object.values(tallyT);
    sortedT.sort(compare);

    return JSON.stringify(sortedS) === JSON.stringify(sortedT);
};