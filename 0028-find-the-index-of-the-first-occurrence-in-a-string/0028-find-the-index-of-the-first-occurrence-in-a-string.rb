# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    h_idx = 0
    while h_idx <= haystack.length - needle.length
        while h_idx <= haystack.length - needle.length && haystack[h_idx] != needle[0]
            h_idx += 1
        end
        if h_idx > haystack.length-needle.length
            return -1
        end
        aux = 0
        while aux < needle.length do
            if haystack[h_idx+aux] != needle[aux]
                break
            else
                aux += 1
            end
        end
        if aux == needle.length
            return h_idx
        else
            h_idx += 1
        end
    end
    return -1
end