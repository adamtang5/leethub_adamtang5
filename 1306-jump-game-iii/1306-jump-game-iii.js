/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = new Set();
    const inBounds = i => i >= 0 || i < arr.length;
    const valid = i => inBounds(i) && !visited.has(i);
    
    const queue = [start];
    let curr;
    while (queue.length) {
        curr = queue.shift();
        if (arr[curr] === 0) {
            return true;
        } else if (valid(curr)) {
            visited.add(curr);
            if (valid(curr - arr[curr])) queue.push(curr - arr[curr]);
            if (valid(curr + arr[curr])) queue.push(curr + arr[curr]);
        }
    }
    return false;
};