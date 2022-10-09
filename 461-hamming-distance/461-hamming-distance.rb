# @param {Integer} x
# @param {Integer} y
# @return {Integer}
def hamming_distance(x, y)
    return (x ^ y).to_s(2).split('').filter { |d| d == '1' }.length
end