# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
    (0...s.length).each do |i|
        return false if s.index(s[i]) != t.index(t[i])
    end
    return true
end