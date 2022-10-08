# @param {Integer} n
# @return {Boolean}
def is_power_of_three(n)
    while n > 1
        if n % 3 > 0
            return false
        end
        n /= 3
    end
    return n == 1
end