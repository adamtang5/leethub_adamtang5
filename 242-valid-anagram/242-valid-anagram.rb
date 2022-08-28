# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    return false if s.length != t.length
    counts = Array.new(26, 0)
    (0...s.length).each do |i|
        counts[s[i].ord - 'a'.ord] += 1
        counts[t[i].ord - 'a'.ord] -= 1
    end
    return counts.all? { |n| n == 0 }
end