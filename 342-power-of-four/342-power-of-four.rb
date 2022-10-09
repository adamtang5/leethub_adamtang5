# @param {Integer} n
# @return {Boolean}
def is_power_of_four(n)
    return false if n <= 0
    power = (Math.log(n) / Math.log(4)).floor
    return n == 4 ** power
end