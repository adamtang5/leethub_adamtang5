# @param {Integer} n, a positive integer
# @return {Integer}
def hamming_weight(n)
  n.to_s(2).chars.select{ |d| d == '1' }.length
end