# @param {Integer} x
# @return {Integer}
def reverse(x)
    sign = x >= 0 ? 1 : -1
    ans = sign * x.abs.to_s.reverse.to_i
    return ans < -1 * (2 ** 31) || ans >= 2 ** 31 ? 0 : ans
end