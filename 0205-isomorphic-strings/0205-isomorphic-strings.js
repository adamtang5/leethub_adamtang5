/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return s.split('').map(ch => s.indexOf(ch)).toString() === t.split('').map(ch => t.indexOf(ch)).toString();
};