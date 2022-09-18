# @param {Integer[]} prices
# @return {Integer}
def get_descent_periods(prices)
    l = r = ans = 0
    while r < prices.length
        ans += r - l + 1
        r += 1
        if r < prices.length && prices[r] != prices[r-1] - 1
            l = r
        end
    end
    return ans
end