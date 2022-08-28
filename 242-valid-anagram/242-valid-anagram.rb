# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    return false if s.length != t.length
    return s.chars.sort.join == t.chars.sort.join
end