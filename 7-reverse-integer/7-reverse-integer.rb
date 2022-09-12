# @param {Integer} x
# @return {Integer}
def reverse(x)
    sign = x >= 0 ? 1 : -1
    x = x.abs
    s = ''
    while x > 0
        s += (x % 10).to_s
        x /= 10
    end
    ans = sign * s.to_i
    return ans < -1 * (2 ** 31) || ans >= 2 ** 31 ? 0 : ans
end