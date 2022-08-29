# @param {String} s
# @param {String} t
# @return {Integer}
def min_steps(s, t)
    counts = Array.new(26, 0)
    s.each_char { |ch| counts[ch.ord - 'a'.ord] += 1}
    t.each_char { |ch| counts[ch.ord - 'a'.ord] -= 1}
    return counts.sum { |n| n.abs }
end