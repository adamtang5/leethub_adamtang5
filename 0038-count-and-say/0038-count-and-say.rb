# @param {Integer} n
# @return {String}
def convert(s)
    ans, curr_ch, curr_len, i = '', '', 0, 0
    while i < s.length
        if s[i] == curr_ch
            curr_len += 1
        else
            if curr_len > 0
                ans += curr_len.to_s
                ans += curr_ch
            end
            curr_ch = s[i]
            curr_len = 1
        end
        i += 1
    end
    if curr_len > 0
        ans += curr_len.to_s
        ans += curr_ch
    end
    return ans
end

def count_and_say(n)
    return '1' if n == 1
    return convert(count_and_say(n-1))
end