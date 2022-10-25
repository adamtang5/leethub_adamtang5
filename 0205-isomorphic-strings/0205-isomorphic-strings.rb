# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
    st_map, ts_map = Hash.new, Hash.new
    (0...s.length).each do |i|
        return false if st_map[s[i]] && st_map[s[i]] != t[i]
        st_map[s[i]] = t[i]
        return false if ts_map[t[i]] && ts_map[t[i]] != s[i]
        ts_map[t[i]] = s[i]
    end
    return true
end