/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) return n;
    const mem = [0, 1];
    while (n > 2) {
        mem.push(mem[0] + mem[1]);
        mem.shift();
        n--;
    }
    return mem[0] + mem[1];
};