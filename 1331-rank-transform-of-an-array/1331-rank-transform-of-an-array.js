/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const copy = [...new Set(arr)].sort((a, b) => a - b);
    const iMap = new Map();
    copy.forEach((n, i) => iMap.set(n, i + 1));
    return arr.map(n => iMap.get(n));
};