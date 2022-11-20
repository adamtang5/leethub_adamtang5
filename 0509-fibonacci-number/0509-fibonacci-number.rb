# @param {Integer} n
# @return {Integer}
def fib(n)
    return n if n < 2
    mem = [0, 1]
    (n-2).times do
        mem << mem[-1]+mem.shift
    end
    return mem.sum
end