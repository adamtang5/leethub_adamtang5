/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const copy = Array.from(new Set(arr.slice()));
    copy.sort((a, b) => a - b);
    return arr.map(n => copy.indexOf(n) + 1);
};