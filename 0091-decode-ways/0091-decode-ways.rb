# @param {String} s
# @return {Integer}
def valid(seg)
    return seg != '0' if seg.length == 1
    if seg.length == 2
        return false if !('12'.include?(seg[0]))
        return true if seg[0] == '1'
        return seg[1] <= '6' if seg[0] == '2'
    end
    return true
end

def partition(str)
    ans = []
    curr, l_bit, r_bit, double, l = str[0], str[0], str[1], str[0...2], 0
    while l+1 < str.length
        if !valid(double)
            ans << curr
            curr = r_bit
        elsif !valid(r_bit)
            curr = curr[0...-1]
            if curr != ''
                ans << curr
            end
            curr = double
        else
            curr += r_bit
        end
        l += 1
        l_bit = str[l]
        if l+1 < str.length
            r_bit = str[l+1]
            double = str[l...l+2]
        end
    end
    ans << curr
    return ans
end

def fib(n)
    return 1 if n < 2
    dp = [1] * 2
    while n > 1
        dp[0], dp[1] = dp[1], dp[0]+dp[1]
        n -= 1
    end
    return dp[1]
end

def num_decodings(s)
    if s.length == 1
        return valid(s) ? 1 : 0
    end
    segments = partition(s)
    return 0 if segments.any?{ |seg| !valid(seg) }
    prod = 1
    segments.each do |seg|
        if !seg.include?('0')
            prod *= fib(seg.length)
        end
    end
    return prod
end