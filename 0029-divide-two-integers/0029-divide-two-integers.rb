# @param {Integer} dividend
# @param {Integer} divisor
# @return {Integer}
def divide(dividend, divisor)
    # 2147483647
    d, dv, output = dividend.abs, divisor.abs, 0
    while d >= dv
        temp, mul = dv, 1
        while d >= temp
            d -= temp
            output += mul
            mul += mul
            temp += temp
        end
    end
    if dividend < 0 && divisor >= 0 || divisor < 0 && dividend >= 0
        output = -output
    end
    return [2147483647, [-2147483648, output].max].min
end