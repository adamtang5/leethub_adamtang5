# @param {Integer} n
# @return {Integer}
def fib(n)
    return n if n < 2
    mem = [0, 1]
    (n-2).times { mem << mem[-1]+mem.shift }
    return mem.sum
end