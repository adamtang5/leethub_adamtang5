# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
    return s.chars.map{ |ch| s.index(ch) } == t.chars.map{ |ch| t.index(ch) }
end