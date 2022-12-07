# @param {Character[]} chars
# @return {Integer}
def compress(chars)
    curr_ch, curr_len, curr_len_str, start, i, j = chars[0], 1, '', 0, 1, 0
    while i < chars.length
        if chars[i] == curr_ch
            curr_len += 1
        else
            j = 0
            if curr_len > 1
                curr_len_str = curr_len.to_s
                while j < curr_len_str.length
                    chars[start+1+j] = curr_len_str[j]
                    j += 1
                end
            end
            start += j+1
            chars[start] = chars[i]
            curr_ch = chars[start]
            curr_len = 1
        end
        i += 1
    end
    j = 0
    if curr_len > 1
        curr_len_str = curr_len.to_s
        while j < curr_len_str.length
            chars[start+1+j] = curr_len_str[j]
            j += 1
        end
    end
    return start+j+1
end