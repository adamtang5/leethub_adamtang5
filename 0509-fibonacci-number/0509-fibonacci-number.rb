# @param {Integer} n
# @return {Integer}
def fib(n)
    return n if n < 2
    mem = [0, 1]
    while n > 2
        mem << mem[0]+mem[1]
        mem.shift
        n -= 1
    end
    return mem[0]+mem[1]
end