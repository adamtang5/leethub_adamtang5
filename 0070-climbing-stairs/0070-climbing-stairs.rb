# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    return n if n <= 2
    mem = [1, 2]
    (n-2).times { mem << mem[-1]+mem.shift }
    return mem[-1]
end