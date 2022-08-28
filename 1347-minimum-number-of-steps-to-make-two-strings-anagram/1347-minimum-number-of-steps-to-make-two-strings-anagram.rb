# @param {String} s
# @param {String} t
# @return {Integer}
def min_steps(s, t)
    counts = Array.new(26, 0)
    (0...s.length).each do |i|
        counts[s[i].ord - 'a'.ord] += 1
        counts[t[i].ord - 'a'.ord] -= 1
    end
    return counts.sum { |n| n.abs } / 2
end