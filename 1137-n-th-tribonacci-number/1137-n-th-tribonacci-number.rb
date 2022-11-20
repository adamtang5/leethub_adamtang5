# @param {Integer} n
# @return {Integer}
def tribonacci(n)
    mem = [0, 1, 1]
    return mem[n] if n < 3
    (n-2).times { mem << mem[1]+mem[2]+mem.shift }
    return mem[-1]
end