# @param {String} s
# @return {String}
def longest_palindrome(s)
    return s if s.length < 2
    s = ('$' + s + '@').split('').join('#');
    p_ext = [0] * s.length

    center, r = 0, 0
    (0...s.length-1).each do |i|
        mirror = 2 * center - i
        if i < r
            p_ext[i] = [r - i, p_ext[mirror]].min
        end
        while s[i - 1 - p_ext[i]] == s[i + 1 + p_ext[i]]
            p_ext[i] += 1
        end
        if p_ext[i] + i > r
            center = i
            r = p_ext[i] + i
        end
    end
    max_ext = p_ext.max
    center = p_ext.index(max_ext)
    return s[center - max_ext .. center + max_ext].gsub('#', '')
end