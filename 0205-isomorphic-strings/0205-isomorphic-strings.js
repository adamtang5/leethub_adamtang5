/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sIndex, tIndex;
    for (let i = 0; i < s.length; i++) {
        sIndex = s.indexOf(s[i]);
        tIndex = t.indexOf(t[i]);
        if (sIndex !== tIndex) return false;
    }
    return true;
};