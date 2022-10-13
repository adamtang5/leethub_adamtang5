# @param {String} s
# @param {String} p
# @return {Boolean}
def char_match(ch1, ch2)
    return ch2 == '.' || ch2 == ch1
end

def is_match(s, p, dp={})
    parsed = []
    i = 0
    while i < p.length
        if i+1 < p.length && p[i+1] == '*'
            parsed << p[i]+p[i+1]
            i += 2
        else
            parsed << p[i]
            i += 1
        end
    end
    
    # base cases
    return false if s.length > 0 && parsed.length == 0
    return true if s.length == 0 && parsed.length == 0
    if s.length == 0 && parsed.length > 0
        return parsed.all?{ |el| el.length == 2 }
    end
    
    # recursive steps
    first = parsed.shift
    if first.length == 1
        return char_match(s[0], first) && is_match(s[1..-1], parsed, dp)
    else
        if !char_match(s[0], first[0])
            return is_match(s, parsed, dp)
        else
            key = [s, [first]+parsed]
            if dp[key] != nil
                return dp[key]
            else
                len = 1
                while len < s.length && (first[0] == '.' || s[len] == s[0])
                    len += 1
                end
                bool = false
                (0..len).each do |i|
                    bool ||= is_match(s[i..-1], parsed, dp)
                end
                dp[key] = bool
                return bool
            end
        end
    end
end