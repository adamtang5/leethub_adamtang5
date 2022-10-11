# @param {Integer} num
# @return {Boolean}
def is_same_after_reversals(num)
    return num == 0 || num % 10 > 0
end