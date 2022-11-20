/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    const mem = [1, 2];
    while (n > 2) {
        mem.push(mem[1] + mem.shift());
        n--;
    }
    return mem[1];
};