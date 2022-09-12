# @param {Integer} x
# @return {Integer}
def reverse(x)
    min_value = -2147483648     # -2^31
    max_value = 2147483647      #  2^31 - 1
    max_sans_ones = (max_value / 10.0).truncate(0)
    min_sans_ones = (min_value / 10.0).truncate(0)
    max_ones = max_value.remainder(10)
    min_ones = min_value.remainder(10)
    
    ans = 0
    while x != 0
        digit = x.remainder(10)
        x = (x / 10.0).truncate(0)
        p digit, x
        
        if ans > max_sans_ones || (ans == max_sans_ones && digit > max_ones)
            return 0
        elsif ans < min_sans_ones || (ans == min_sans_ones && digit < min_ones)
            return 0
        end
        ans = (ans * 10) + digit
    end
    
    return ans
end