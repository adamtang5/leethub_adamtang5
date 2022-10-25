/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const stMap = {};
    const tsMap = {};
    
    for (let i = 0; i < s.length; i++) {
        if (stMap[s[i]] && stMap[s[i]] !== t[i]) return false;
        stMap[s[i]] = t[i];
        if (tsMap[t[i]] && tsMap[t[i]] !== s[i]) return false;
        tsMap[t[i]] = s[i];
    }
    return true;
};