# @param {Integer[]} coins
# @param {Integer} amount
# @return {Integer}
def coin_change(coins, amount)
    n, remain = 0, 1 << amount
    while remain & 1 == 0
        shift_sum = 0
        coins.each{ |coin| shift_sum |= remain >> coin }
        return -1 if shift_sum == 0
        remain = shift_sum
        n += 1
    end
    return n
end