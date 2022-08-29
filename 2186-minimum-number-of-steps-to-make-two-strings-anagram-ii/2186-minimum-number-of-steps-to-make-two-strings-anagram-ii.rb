# @param {String} s
# @param {String} t
# @return {Integer}
def min_steps(s, t)
    counts = Hash.new(0)
    s.each_char { |ch| counts[ch] += 1}
    t.each_char { |ch| counts[ch] -= 1}
    return counts.values.sum { |n| n.abs }
end