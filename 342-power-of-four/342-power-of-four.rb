# @param {Integer} n
# @return {Boolean}
def is_power_of_four(n)
    while n > 1
        if n % 4 > 0
            return false
        end
        n /= 4
    end
    return n == 1
end