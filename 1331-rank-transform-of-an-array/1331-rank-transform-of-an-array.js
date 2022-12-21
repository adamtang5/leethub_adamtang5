/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const copy = [...new Set(arr)].sort((a, b) => a - b);
    const map = new Map();
    copy.forEach((n, i) => map.set(n, i + 1));
    return arr.map(n => map.get(n));
};