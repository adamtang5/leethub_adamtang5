# @param {Integer} n
# @return {Boolean}
def is_power_of_two(n)
    while n > 1
        if n % 2 > 0
            return false
        end
        n /= 2
    end
    return n == 1
end