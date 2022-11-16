# @param {Float} x
# @param {Integer} n
# @return {Float}
def my_pow(x, n)
    return 1 if n == 0
    if n > 0
        while n > 0
            return x * my_pow(x, n-1) if n % 2 > 0
            return my_pow(x*x, n/2)
        end
    else
        while n < 0
            return my_pow(x, n+1) / x if n % 2 > 0
            return my_pow(x*x, n/2)
        end
    end
end