/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let hIdx = 0;
    const lenDiff = haystack.length - needle.length;
    while (hIdx <= lenDiff) {
        while (hIdx <= lenDiff && haystack[hIdx] !== needle[0]) {
            hIdx++;
        }
        if (hIdx > lenDiff) return -1;
        let aux = 0;
        while (aux < needle.length) {
            if (haystack[hIdx + aux] != needle[aux]) {
                break
            } else {
                aux++;
            }
        }
        if (aux === needle.length) {
            return hIdx;
        } else {
            hIdx++;
        }
    }
    return -1;
};